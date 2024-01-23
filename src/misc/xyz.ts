type Coordinate = XYZ | number[];

interface IBfsOptions {
	/**
	 * A function to get the neighbors of this point.
	 * @default p => p.neighbors()
	 */
	getNeighbors?: (p: XYZ) => XYZ[];
	/**
	 * Determines whether a neighbor point can be visited, in addition to normal checks of whether the point has already been visited,
	 * determined by if the neighbor's key as defined by getVisitedKey is already in the list of visited point keys.
	 * @default () => true
	 */
	canVisitNeighbor?: (neighbor: XYZ, p: XYZ) => boolean;
	/**
	 * Determines whether the BFS should stop when visiting a new point.
	 * @default () => false
	 */
	shouldStop?: (p: XYZ) => boolean;
	/**
	 * Performs some action on every point before it's visited.
	 * @default () => {}
	 */
	tap?: (p: XYZ, iteration: number) => void;
	/**
	 * Returns the string to add to the 'visitedPoints' set when a point is visited. This is used to determine whether a neighbor can be
	 * visited, in addition to the return value of the `canVisitNeighbor` function.
	 * @default p => p.toString()
	 */
	getVisitedKey?: (p: XYZ, iteration: number) => string;
}

interface IBfsResult {
	/**
	 * all the point keys that the BFS visited, on all paths taken, represented by keys from the `getVisitedKey` function.
	 * Includes start and end points.
	 */
	visitedKeys: Set<string>;
	/** an array of all the unique points visited by all paths taken, including the starting and ending points */
	visitedPoints: XYZ[];
	/** the last XYZ point visited before the BFS stopped */
	endPoint: XYZ;
	/** the length of the path the BFS took to get to `endPoint` */
	pathLength: number;
}

interface IBfsQueueItem {
	point: XYZ;
	iteration: number;
}

const axes = ["x", "y", "z"] as const;
const orthogonal = {
	"2d": [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	],
	"3d": [
		[1, 0, 0],
		[-1, 0, 0],
		[0, 1, 0],
		[0, -1, 0],
		[0, 0, 1],
		[0, 0, -1],
	],
};
const diagonal = {
	"2d": [
		[1, 1],
		[1, -1],
		[-1, -1],
		[-1, 1],
	],
	"3d": [
		[1, 1, 1],
		[1, -1, 1],
		[-1, -1, 1],
		[-1, 1, 1],
		[1, 1, 0],
		[1, -1, 0],
		[-1, -1, 0],
		[-1, 1, 0],
		[1, 1, -1],
		[1, -1, -1],
		[-1, -1, -1],
		[-1, 1, -1],
	],
};
const defaultOptionsBfsOptions: IBfsOptions = {
	getNeighbors: (p) => p.neighbors(),
	canVisitNeighbor: () => true,
	getVisitedKey: (p) => p.toString(),
	shouldStop: () => false,
	tap: () => {},
};

function sum(...nums: number[] | (readonly number[])[]): number {
	return nums.reduce<number>((total, num) => {
		if (typeof num === "number") return total + num;
		return total + sum(...num);
	}, 0);
}

function toInt(x: string): number {
	return parseInt(x.trim(), 10);
}

function mapStrToCoords(str: string, separator: string): number[] {
	return str
		.split(separator)
		.filter((v) => v.trim() !== "")
		.map(toInt);
}

function getSign(x: number): number {
	return x === 0 ? 0 : x / Math.abs(x);
}

/**
 * A class that gives convenient tools for dealing with 2D or 3D coordinates
 *
 * **Static Methods:**
 * - `normalize` - Takes either an XYZ or number[] and converts it to XYZ
 * - `sum` - Adds multiple coordinates together and returns a new object
 * - `fromString` - converts a string like '3,6,2' a number array and uses that to create an XYZ object
 *
 * **Methods:**
 * - `add` - Adds additional coordinates, modifying the current one, and returns the original object
 * - `plus` - Adds coordinates to the current one, returning a new object
 * - `subtract` - Subtracts additional coordinates, modifying the current one, and returns the original object
 * - `minus` - Subtracts additional coordinates, returning a new object
 * - `multiply` - Multiplies all values by a given scalar. Modifies the original object
 * - `times` - Multiplies all values by a given scalar, returning a new object
 * - `copy` - Returns a copy of the object
 * - `toSign` - Returns a new XYZ object whose values are either 0, 1, or -1, representing whether the x, y, and z values are positive, negative, or 0
 * - `eq` - Returns whether the coordinates of the XYZ object and another are the same
 * - `neighbors` - Returns all neighbors in the same z plane
 * - `neighbors3D` - Returns all neighbors in 3 dimensions
 * - `distanceTo` - Returns the absolute straight-line distance from one point to another
 * - `taxicabDistanceTo` - Returns the absolute distance from one point to another using taxicab geometry
 * - `valueIn` - given a 2D or 3D array, returns the value at [y][x][z] in that array
 * - `bfs` - Performs a breadth-first search starting at the point the method is called on. Returns the set of visited points and the number if iterations it took to finish. Unless otherwise specified, stops when it runs out of possible places to travel and avoids revisiting points that any path has visited.
 *
 * @example
 * ```ts
 * const p = new XYZ(1, 2, 3);
 * p.add(1, 2, 3);
 * // => XYZ { x: 2, y: 4, z: 6 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.plus(1, 2, 3);
 * // => new XYZ { x: 2, y: 4, z: 6 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.subtract(1, 2, 3);
 * // => XYZ { x: 0, y: 0, z: 0 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.minus(1, 2, 3);
 * // => new XYZ { x: 0, y: 0, z: 0 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.multiply(2);
 * // => XYZ { x: 2, y: 4, z: 6 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.times(2);
 * // => new XYZ { x: 2, y: 4, z: 6 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.copy();
 * // => new XYZ { x: 1, y: 2, z: 3 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.toSign();
 * // => new XYZ { x: 1, y: 1, z: 1 }
 *
 * const p = new XYZ(1, 2, 3);
 * p.eq([1, 2, 3]);
 * // => true
 *
 * const p = new XYZ(1, 2, 3);
 * p.neighbors();
 * // [
 * //   XYZ { x: 2, y: 2, z: 3 },
 * //   XYZ { x: 1, y: 3, z: 3 },
 * //   XYZ { x: 0, y: 2, z: 3 },
 * //   XYZ { x: 1, y: 1, z: 3 }
 * // ]
 *
 * const p = new XYZ(1, 2, 3);
 * p.neighbors3D();
 * // [
 * //   XYZ { x: 2, y: 2, z: 3 },
 * //   XYZ { x: 0, y: 2, z: 3 },
 * //   XYZ { x: 1, y: 3, z: 3 },
 * //   XYZ { x: 1, y: 1, z: 3 },
 * //   XYZ { x: 1, y: 2, z: 4 },
 * //   XYZ { x: 1, y: 2, z: 2 }
 * // ]
 *
 * const p = new XYZ(1, 2, 3);
 * p.distanceTo([4, 5, 6]); // => 5.196152422706632
 *
 * const p = new XYZ(1, 2, 3);
 * p.taxicabDistanceTo([4, 5, 6]); // => 9
 *
 * const p = new XYZ(1, 2, 3);
 * p.valueIn([
 *   [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9],
 *   ],
 *   [
 *     [10, 11, 12],
 *     [13, 14, 15],
 *     [16, 17, 18],
 *   ],
 * ]);
 * // => 15
 *
 * const p = new XYZ(1, 2, 3);
 * p.bfs({
 *   getNeighbors: (p) => p.neighbors(),
 *   canVisitNeighbor: () => true,
 *   getVisitedKey: (p) => p.toString(),
 *   shouldStop: () => false,
 *   tap: () => {},
 * });
 * // => {
 * //   visitedKeys: Set { 'XYZ { 1,2,3 }0', 'XYZ { 2,2,3 }1', 'XYZ { 1,3,3 }1', 'XYZ { 0,2,3 }1', 'XYZ { 1,1,3 }1' },
 * //   visitedPoints: [
 * //     XYZ { x: 1, y: 2, z: 3 },
 * //     XYZ { x: 2, y: 2, z: 3 },
 * //     XYZ { x: 1, y: 3, z: 3 },
 * //     XYZ { x: 0, y: 2, z: 3 },
 * //     XYZ { x: 1, y: 1, z: 3 }
 * //   ],
 * //   endPoint: XYZ { x: 1, y: 1, z: 3 },
 * //   pathLength: 1
 * // }
 * ```
 *
 * @category Misc
 */
export class XYZ {
	x: number;
	y: number;
	z: number;

	/** The XYZ tag. */
	get [Symbol.toStringTag]() {
		return "XYZ";
	}

	/**
	 * @param x The x value
	 * @param y The y value
	 * @param z The z value
	 */
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	/**
	 * Takes either an XYZ or number[] and converts it to XYZ.
	 *
	 * @param c The coordinate to normalize
	 * @returns The normalized coordinate
	 */
	static normalize(c: Coordinate): XYZ {
		return c instanceof XYZ ? c : new XYZ(...c);
	}

	/**
	 * Adds multiple coordinates together and returns a new object.
	 *
	 * @param cs The coordinates to add
	 * @returns The sum of the coordinates
	 */
	static sum(...cs: Coordinate[]): XYZ {
		const xyzs = cs.map(XYZ.normalize);
		return new XYZ(
			sum(xyzs.map((c) => c.x)),
			sum(xyzs.map((c) => c.y)),
			sum(xyzs.map((c) => c.z)),
		);
	}

	/**
	 * Creates an XYZ object from x, y, and z coordinates.
	 *
	 * @param x The x coordinate
	 * @param y The y coordinate
	 * @param z The z coordinate
	 * @returns A new XYZ object
	 */
	static from(x = 0, y = 0, z = 0): XYZ {
		return new XYZ(x, y, z);
	}

	/**
	 * Creates an XYZ object from an object.
	 *
	 * @param obj The object to create an XYZ from
	 * @returns The XYZ object
	 */
	static fromObject(obj: {
		x?: number | undefined;
		y?: number | undefined;
		z?: number | undefined;
	}): XYZ {
		return new XYZ(obj.x ?? 0, obj.y ?? 0, obj.z ?? 0);
	}

	/**
	 * Converts a string like '3,6,2', '[3,6,2]', '{ x: 3, y: 6, z:2 }', '3 6 2', '3;6;2', '3|6|2', '3_6_2',
	 * or any of those options prepended with 'XYZ', and uses that to create an XYZ object.
	 * You can also specify a custom separator.
	 *
	 * @param str The string to convert
	 * @param separator A custom separator to use when splitting the string
	 * @returns The XYZ object
	 */
	static fromString(str: string, separator?: string): XYZ {
		str = str.replace(/XYZ/g, "").trim();
		let coordinates: number[] = [];
		try {
			if (str.length === 0) coordinates = [0, 0, 0];
			else if (separator) coordinates = mapStrToCoords(str, separator);
			else if (str.startsWith("[")) coordinates = JSON.parse(str);
			else if (str.startsWith("{")) {
				const obj = JSON.parse(str);
				coordinates = [obj.x ?? 0, obj.y ?? 0, obj.z ?? 0];
			} else if (str.includes(",")) coordinates = mapStrToCoords(str, ",");
			else if (str.includes(";")) coordinates = mapStrToCoords(str, ";");
			else if (str.includes("|")) coordinates = mapStrToCoords(str, "|");
			else if (str.includes("_")) coordinates = mapStrToCoords(str, "_");
			else if (str.includes(" ")) coordinates = mapStrToCoords(str, " ");
			else {
				const num = toInt(str);
				if (Number.isNaN(num)) throw new Error();
				coordinates = [num];
			}
		} catch {
			throw new Error("Invalid string");
		}
		return new XYZ(...coordinates);
	}

	/**
	 * @returns The XYZ as a string.
	 */
	toString(
		replacer?: ((this: any, key: string, value: any) => any) | undefined,
		space?: string | number | undefined,
	) {
		return `${this[Symbol.toStringTag]} ${JSON.stringify(
			this.toJSON(),
			replacer,
			space,
		)}`;
	}

	/**
	 * Converts the XYZ to a string used by `JSON.stringify()`.
	 *
	 * @returns The XYZ as a string
	 */
	toJSON() {
		return this.toCoordinate();
	}

	/**
	 * @returns The XYZ as a coordinate array.
	 */
	toCoordinate(): [number, number, number] {
		return [this.x, this.y, this.z] as const;
	}

	/**
	 * @returns The XYZ as a coordinate object.
	 */
	toCoordinateObject(): { x: number; y: number; z: number } {
		return { x: this.x, y: this.y, z: this.z };
	}

	/**
	 * Adds additional coordinates, modifying the current one, and returns the original object.
	 *
	 * @param cs The coordinates to add
	 * @returns The original object
	 */
	add(...cs: Coordinate[]): XYZ {
		const xyzs = cs.map(XYZ.normalize);
		for (const axis of axes) this[axis] += sum(xyzs.map((c) => c[axis]));
		return this;
	}

	/**
	 * Adds coordinates to the current one, returning a new object.
	 *
	 * @param cs The coordinates to add
	 * @returns The sum of the coordinates
	 */
	plus(...cs: Coordinate[]): XYZ {
		return this.copy().add(...cs);
	}

	/**
	 * Subtracts additional coordinates, modifying the current one, and returns the original object.
	 *
	 * @param cs The coordinates to subtract
	 * @returns The original object
	 */
	subtract(...cs: Coordinate[]): XYZ {
		const xyzs = cs.map(XYZ.normalize);
		for (const axis of axes) this[axis] += sum(xyzs.map((c) => -c[axis]));
		return this;
	}

	/**
	 * Subtracts additional coordinates, returning a new object.
	 *
	 * @param cs The coordinates to subtract
	 * @returns The difference of the coordinates
	 */
	minus(...cs: Coordinate[]): XYZ {
		return this.copy().subtract(...cs);
	}

	/**
	 * Multiplies all values by a given scalar. Modifies the original object.
	 *
	 * @param scalar The scalar to multiply by
	 * @returns The original object with the values multiplied
	 */
	multiply(scalar: number): XYZ {
		for (const axis of axes) this[axis] *= scalar;
		return this;
	}

	/**
	 * Multiplies all values by a given scalar, returning a new object.
	 *
	 * @param scalar The scalar to multiply by
	 * @returns The new object with the values multiplied
	 */
	times(scalar: number): XYZ {
		return this.copy().multiply(scalar);
	}

	/**
	 * @returns The copy of the object
	 */
	copy(): XYZ {
		return new XYZ(this.x, this.y, this.z);
	}

	/**
	 * Returns a new XYZ object whose values are either 0, 1, or -1, representing whether the x, y, and z values are
	 * positive, negative, or 0.
	 *
	 * @returns The new object with the values normalized
	 */
	toSign(): XYZ {
		return new XYZ(getSign(this.x), getSign(this.y), getSign(this.z));
	}

	/**
	 *  Returns whether the coordinates of the XYZ object and another are the same.
	 *
	 * @param c The coordinate to compare to
	 * @returns Whether the coordinates are the same
	 */
	eq(c: Coordinate): boolean {
		const xyz = XYZ.normalize(c);
		return (
			xyz != null && this.x === xyz.x && this.y === xyz.y && this.z === xyz.z
		);
	}

	/**
	 * Returns all neighbors in the same z plane.
	 *
	 * @param includeDiagonal Whether to include diagonal neighbors
	 * @returns The neighbors
	 */
	neighbors(includeDiagonal = false): XYZ[] {
		return [
			...orthogonal["2d"],
			...(includeDiagonal ? diagonal["2d"] : []),
		].map((c) => this.plus(c));
	}

	/**
	 * Returns all neighbors in 3 dimensions.
	 *
	 * @param includeDiagonal Whether to include diagonal neighbors
	 * @returns The neighbors
	 */
	neighbors3d(includeDiagonal = false): XYZ[] {
		return [
			...orthogonal["3d"],
			...(includeDiagonal ? diagonal["3d"] : []),
		].map((c) => this.plus(c));
	}

	/**
	 * Returns the absolute straight-line distance from one point to another.
	 *
	 * @param destination The destination point
	 * @returns The distance
	 */
	distanceTo(destination: Coordinate): number {
		const xyz = XYZ.normalize(destination);
		// find the distance in the XY plane, then return the distance to the Z point using the XY distance as the leg of a right triangle
		return Math.sqrt(
			(this.x - xyz.x) ** 2 + (this.y - xyz.y) ** 2 + (this.z - xyz.z) ** 2,
		);
	}

	/**
	 * Returns the absolute distance from one point to another using taxicab geometry.
	 *
	 * @param destination The destination point
	 * @returns The distance
	 */
	taxicabDistanceTo(destination: Coordinate): number {
		const xyz = XYZ.normalize(destination);
		return (
			Math.abs(this.x - xyz.x) +
			Math.abs(this.y - xyz.y) +
			Math.abs(this.z - xyz.z)
		);
	}

	/**
	 * Given a 2D or 3D array, returns the value at [y][x][z] in that array.
	 *
	 * @param arr The array to get the value from
	 * @returns The value
	 */
	valueIn<T>(arr: T[][]): T;
	valueIn<T>(arr: T[][][]): T;
	valueIn<T>(arr: (T | T[])[][]) {
		const element2d = arr[this.y]?.[this.x];
		return Array.isArray(element2d) ? element2d?.[this.z] : element2d;
	}

	/**
	 * Performs a breadth-first search starting at the point the method is called on.
	 * Returns the set of visited points and the number if iterations it took to finish.
	 * Unless otherwise specified, stops when it runs out of possible places to travel and avoids revisiting points that any path
	 * has visited.
	 *
	 * @param options The options for the BFS
	 * @param options.getNeighbors A function to get the neighbors of this point.
	 * @param options.canVisitNeighbor Determines whether a neighbor point can be visited, in addition to normal checks of whether the point has already been visited,
	 * determined by if the neighbor's key as defined by getVisitedKey is already in the list of visited point keys.
	 * @param options.getVisitedKey Returns the string to add to the 'visitedPoints' set when a point is visited. This is used to determine whether a neighbor can be
	 * visited, in addition to the return value of the `canVisitNeighbor` function.
	 * @param options.shouldStop Determines whether the BFS should stop when visiting a new point.
	 * @param options.tap Performs some action on every point before it's visited.
	 * @returns The BFS result
	 */
	bfs(options?: IBfsOptions): IBfsResult {
		const o = { ...defaultOptionsBfsOptions, ...options };
		const visitedKeys = new Set<string>(); // XYZ strings, also maybe combined with iteration strings?
		const visitedPoints = new Set<string>(); // used just for returning info, not used during the BFS algorithm
		const queue: IBfsQueueItem[] = [{ point: this, iteration: 0 }];
		visitedKeys.add(
			(o.getVisitedKey as (p: XYZ, iteration: number) => string)(this, 0),
		);
		visitedPoints.add(this.toString());
		let current: IBfsQueueItem | undefined;
		while (queue.length > 0) {
			current = queue.pop() as IBfsQueueItem;
			if (o.shouldStop?.(current.point)) break;
			for (const p of (o.getNeighbors as (p: XYZ) => XYZ[])(
				current.point,
			).filter(
				(n) =>
					o.canVisitNeighbor?.(n, (current as IBfsQueueItem).point) &&
					!visitedKeys.has(
						(o.getVisitedKey as (p: XYZ, iteration: number) => string)(
							n,
							(current as IBfsQueueItem).iteration + 1,
						),
					),
			)) {
				o.tap?.(p, current.iteration + 1);
				visitedKeys.add(
					(o.getVisitedKey as (p: XYZ, iteration: number) => string)(
						p,
						current.iteration + 1,
					),
				);
				visitedPoints.add(p.toString());
				queue.unshift({ point: p, iteration: current.iteration + 1 });
			}
		}
		return {
			visitedKeys: visitedKeys,
			visitedPoints: [...visitedPoints.values()].map((p) => XYZ.fromString(p)),
			endPoint: (current as IBfsQueueItem).point,
			pathLength: (current as IBfsQueueItem).iteration,
		};
	}
}
