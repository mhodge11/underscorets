/**
 * A binary search tree is a data structure that is used to store data in a sorted manner.
 * Each node in the binary search tree has a value, a left node, and a right node.
 * The left node is always less than the parent node, and the right node is always greater than the parent node.
 * This allows for fast searching, inserting, and deleting of data.
 *
 * **Static Methods:**
 * - `from` - Creates a binary search tree from an array.
 * - `fromString` - Creates a binary search tree from a string.
 *
 * **Methods:**
 * - `insert` - Inserts a value into the binary search tree. Returns the binary search tree.
 * - `contains` - Check if the binary search tree contains a value. Returns `true` if the binary search tree contains the value, `false` otherwise.
 * - `get` - Finds a value in the binary search tree and returns the node. Returns the node containing the value or `undefined` if the value doesn't exist.
 * - `minValueNode` - Finds the minimum value node in the binary search tree. Returns the minimum value node.
 * - `maxValueNode` - Finds the maximum value node in the binary search tree. Returns the maximum value node.
 * - `dfsPreOrder` - Performs a depth-first search on the binary search tree using pre-order traversal. Returns the values of the binary search tree in pre-order.
 * - `dfsPostOrder` - Performs a depth-first search on the binary search tree using post-order traversal. Returns the values of the binary search tree in post-order.
 * - `dfsInOrder` - Performs a depth-first search on the binary search tree using in-order traversal. Returns the values of the binary search tree in in-order.
 * - `bfs` - Performs a breadth-first search on the binary search tree. Returns the values of the binary search tree in breadth-first order.
 * - `copy` - Constructs a new binary search tree with the same values as the current binary search tree.
 * - `toString` - Returns the binary search tree as a string.
 * - `toJSON` - Converts the binary search tree to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the binary search tree to an object.
 *
 * **Properties:**
 * - `raw` - The raw data of the binary search tree.
 * - `allowDuplicates` - Whether the binary search tree allows duplicate values.
 * - `compare` - The compare function of the binary search tree used to choose left or right.
 *
 * @template T The type of the values stored in the binary search tree
 *
 * @example
 * ```ts
 * const tree = new BinarySearchTree<number>();
 *
 * tree.insert(5);
 * // => BinarySearchTree { _root: Node { value: 5, left: undefined, right: undefined } }
 * tree.insert(3);
 * // => BinarySearchTree { _root: Node { value: 5, left: Node { value: 3, left: undefined, right: undefined }, right: undefined } }
 * tree.insert(7);
 * // => BinarySearchTree { _root: Node { value: 5, left: Node { value: 3, left: undefined, right: undefined }, right: Node { value: 7, left: undefined, right: undefined } } }
 *
 * tree.contains(3);
 * // => true
 * tree.contains(4);
 * // => false
 *
 * tree.minValueNode();
 * // => Node { value: 3, left: undefined, right: undefined }
 * tree.maxValueNode();
 * // => Node { value: 7, left: undefined, right: undefined }
 *
 * tree.dfsPreOrder();
 * // => [5, 3, 7]
 * tree.dfsPostOrder();
 * // => [3, 7, 5]
 * tree.dfsInOrder();
 * // => [3, 5, 7]
 * tree.bfs();
 * // => [5, 3, 7]
 *
 * tree.remove(3);
 * // => BinarySearchTree { _root: Node { value: 5, left: undefined, right: Node { value: 7, left: undefined, right: undefined } } }
 * ```
 *
 * @category Misc
 */
export class BinarySearchTree<T> {
	private _root: Node<T> | undefined;
	private _compare: (a: T, b: T) => -1 | 0 | 1;
	private _allowDuplicates = false;
	private _size = 0;

	/** The raw data of the binary search tree. */
	get raw() {
		return this._root;
	}

	/** Whether the binary search tree allows duplicate values. */
	get allowDuplicates() {
		return this._allowDuplicates;
	}

	/** The number of nodes in the binary search tree. */
	get size() {
		return this._size;
	}

	/** The BinarySearchTree tag. */
	get [Symbol.toStringTag]() {
		return "BinarySearchTree";
	}

	[Symbol.iterator]() {
		return this.bfs()[Symbol.iterator]();
	}

	[Symbol.isConcatSpreadable]() {
		return true;
	}

	/**
	 * The compare function of the binary search tree used to choose left or right.
	 * Function returns `-1` if `a` should be on the left compared to `b`.
	 * Function returns `0` if `a` and `b` are equal.
	 * Function returns `1` if `a` should be on the right compared to `b`.
	 */
	set compare(fn: (a: T, b: T) => -1 | 0 | 1) {
		this._compare = fn;
	}

	/**
	 * The compare function of the binary search tree used to choose left or right.
	 * Function returns `-1` if `a` should be on the left compared to `b`.
	 * Function returns `0` if `a` and `b` are equal.
	 * Function returns `1` if `a` should be on the right compared to `b`.
	 */
	get compare() {
		return this._compare;
	}

	/**
	 * @constructor
	 * @param allowDuplicates Whether the binary search tree allows duplicate values
	 * @param compare The compare function of the binary search tree used to choose left or right
	 */
	constructor(options?: {
		values?: T[] | undefined;
		allowDuplicates?: boolean | undefined;
		compare?: ((a: T, b: T) => -1 | 0 | 1) | undefined;
	}) {
		const { values, allowDuplicates, compare } = {
			...(options ?? {}),
		};

		this._allowDuplicates = !!allowDuplicates;

		if (compare) this._compare = compare;
		else this._compare = (a: T, b: T) => (a < b ? -1 : a > b ? 1 : 0);

		if (values) for (const value of values) this.insert(value);
	}

	/**
	 * Creates a binary search tree from an array.
	 *
	 * @param values The array to create binary search tree from
	 * @param allowDuplicates Whether the binary search tree allows duplicate values
	 * @param compare The compare function of the binary search tree used to choose left or right
	 * @returns Binary search tree created from array
	 */
	static from<V>(
		values: V[],
		options?: {
			allowDuplicates?: boolean | undefined;
			compare?: ((a: V, b: V) => -1 | 0 | 1) | undefined;
		},
	): BinarySearchTree<V> {
		return new BinarySearchTree<V>({ ...options, values });
	}

	/**
	 * Creates a binary search tree from a string.
	 *
	 * @param str The string to create binary search tree from
	 * @param options Options for the binary search tree
	 * @param options.allowDuplicates Whether the binary search tree allows duplicate values
	 * @param options.compare The compare function of the binary search tree used to choose left or right
	 * @returns Binary search tree created from string
	 */
	static fromString<V>(
		str: string,
		options?: {
			allowDuplicates?: boolean | undefined;
			compare?: ((a: V, b: V) => -1 | 0 | 1) | undefined;
		},
	): BinarySearchTree<V> {
		str = str.replace(/BinarySearchTree/g, "").trim();
		let values: V[] = [];
		try {
			const parsedStr = JSON.parse(str);
			if (Array.isArray(parsedStr)) values = parsedStr;
			else values = [parsedStr];
		} catch {
			throw new Error("Invalid JSON");
		}
		return new BinarySearchTree<V>({ ...options, values });
	}

	/**
	 * Inserts a value into the binary search tree.
	 *
	 * @param value The value to insert
	 * @returns The binary search tree
	 */
	insert(value: T): this {
		const newNode = new Node(value);

		if (!this._root) {
			this._root = newNode;
			this._size++;
			return this;
		}

		let temp = this._root;
		while (true) {
			const compare = this._compare(newNode.value, temp.value);
			if (compare === 0) {
				if (this._allowDuplicates) {
					temp.count++;
					this._size++;
				}
				return this;
			}

			if (compare < 0) {
				if (temp.left === undefined) {
					temp.left = newNode;
					this._size++;
					return this;
				}

				temp = temp.left;
			} else {
				if (temp.right === undefined) {
					temp.right = newNode;
					this._size++;
					return this;
				}

				temp = temp.right;
			}
		}
	}

	/**
	 * Whether the binary search tree contains a value.
	 *
	 * @param value The value to check
	 * @returns `true` if the binary search tree contains the value, `false` otherwise
	 */
	contains(value: T): boolean {
		if (!this._root) return false;

		let temp: Node<T> | undefined = this._root;
		while (temp) {
			const compare = this._compare(value, temp.value);
			if (compare < 0) temp = temp.left;
			else if (compare > 0) temp = temp.right;
			else return true;
		}

		return false;
	}

	/**
	 * Finds a value in the binary search tree and returns the node.
	 *
	 * @param value The value to find
	 * @returns The node containing the value or `undefined` if the value doesn't exist
	 */
	get(value: T): Node<T> | undefined {
		if (!this._root) return undefined;

		let temp: Node<T> | undefined = this._root;
		while (temp) {
			const compare = this._compare(value, temp.value);
			if (compare < 0) temp = temp.left;
			else if (compare > 0) temp = temp.right;
			else return temp;
		}

		return undefined;
	}

	/**
	 * Finds the minimum value node in the binary search tree.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The minimum value node
	 */
	minValueNode(currentNode = this._root): Node<T> | undefined {
		if (!currentNode) return undefined;
		while (currentNode.left) currentNode = currentNode.left;
		return currentNode;
	}

	/**
	 * Finds the maximum value node in the binary search tree.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The maximum value node
	 */
	maxValueNode(currentNode = this._root): Node<T> | undefined {
		if (!currentNode) return undefined;
		while (currentNode.right) currentNode = currentNode.right;
		return currentNode;
	}

	/**
	 * Performs a depth-first search on the binary search tree using pre-order traversal.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The values of the binary search tree in pre-order
	 */
	dfsPreOrder(currentNode = this._root): T[] {
		const results: T[] = [];
		if (!currentNode) return results;
		this._dfsPreOrder(currentNode, results);
		return results;
	}

	private _dfsPreOrder(currentNode = this._root as Node<T>, results: T[] = []) {
		this.pushToTraversalArray(currentNode, results);

		if (currentNode?.left) this._dfsPreOrder(currentNode.left, results);
		if (currentNode?.right) this._dfsPreOrder(currentNode.right, results);
	}

	/**
	 * Performs a depth-first search on the binary search tree using post-order traversal.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The values of the binary search tree in post-order
	 */
	dfsPostOrder(currentNode = this._root): T[] {
		const results: T[] = [];
		if (!currentNode) return results;
		this._dfsPostOrder(currentNode, results);
		return results;
	}

	private _dfsPostOrder(
		currentNode = this._root as Node<T>,
		results: T[] = [],
	) {
		if (currentNode?.left) this._dfsPostOrder(currentNode.left, results);
		if (currentNode?.right) this._dfsPostOrder(currentNode.right, results);

		this.pushToTraversalArray(currentNode, results);
	}

	/**
	 * Performs a depth-first search on the binary search tree using in-order traversal.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The values of the binary search tree in in-order
	 */
	dfsInOrder(currentNode = this._root): T[] {
		const results: T[] = [];
		if (!currentNode) return results;
		this._dfsInOrder(currentNode, results);
		return results;
	}

	private _dfsInOrder(currentNode = this._root as Node<T>, results: T[] = []) {
		if (currentNode?.left) this._dfsInOrder(currentNode.left, results);

		this.pushToTraversalArray(currentNode, results);

		if (currentNode?.right) this._dfsInOrder(currentNode.right, results);
	}

	private pushToTraversalArray(node: Node<T>, array: T[]) {
		for (let i = 0; i < node.count; i++) array.push(node.value);
	}

	/**
	 * Performs a breadth-first search on the binary search tree.
	 *
	 * @param currentNode The node to start at, defaults to the root
	 * @returns The values of the binary search tree in breadth-first order
	 */
	bfs(currentNode = this._root): T[] {
		if (!currentNode) return [] as T[];

		const queue = [];
		const results = [];

		queue.push(currentNode);

		while (queue.length) {
			currentNode = queue.shift();
			if (currentNode) results.push(currentNode.value);
			if (currentNode?.left) queue.push(currentNode.left);
			if (currentNode?.right) queue.push(currentNode.right);
		}

		return results;
	}

	/** Creates a copy of the BinarySearchTree. */
	copy(): BinarySearchTree<T> {
		const tree = new BinarySearchTree<T>({
			values: this.bfs(),
			allowDuplicates: this._allowDuplicates,
			compare: this._compare,
		});
		tree._size = this._size;
		return tree;
	}

	/** Converts the BinarySearchTree to a string. */
	toString(
		replacer?: ((this: any, key: string, value: any) => any) | undefined,
		space?: string | number | undefined,
	): string {
		return `${this[Symbol.toStringTag]} ${JSON.stringify(
			this.toJSON(),
			replacer,
			space,
		)}`;
	}

	/** Converts the BinarySearchTree to JSON. */
	toJSON(): T[] {
		return this.bfs();
	}

	/** Converts the BinarySearchTree to an object. */
	toObject(): NodeObject<T> | undefined {
		return this._root?.toObject();
	}
}

/**
 * A node in a binary search tree.
 *
 * **Methods:**
 * - `toString` - Returns the node as a string.
 * - `toJSON` - Converts the node to a string used by `JSON.stringify()`.
 * - `toObject` - Converts the node to an object.
 *
 * **Properties:**
 * - `value` - The value of the node.
 * - `count` - The number of times the value is in the binary search tree.
 * - `left` - The left node.
 * - `right` - The right node.
 *
 * @template T The type of the value stored in the node
 *
 * @example
 * ```ts
 * const node = new Node(5);
 * node.toString(); // => "BSTNode { "value": 5, "count": 1, "left": undefined, "right": undefined }"
 * node.toObject(); // => { "value": 5, "count": 1, "left": undefined, "right": undefined }
 * ```
 */
class Node<T> {
	value: T;
	count = 1;
	left: Node<T> | undefined;
	right: Node<T> | undefined;

	/** The Node tag. */
	get [Symbol.toStringTag]() {
		return "BinarySearchTreeNode";
	}

	constructor(value: T) {
		this.value = value;
	}

	/** Converts the Node to a string. */
	toString(
		replacer?: ((this: any, key: string, value: any) => any) | undefined,
		space?: string | number | undefined,
	): string {
		return `${this[Symbol.toStringTag]} ${JSON.stringify(
			this.toJSON(),
			replacer,
			space,
		)}`;
	}

	/** Converts the Node to JSON. */
	toJSON(): NodeObject<T> {
		return this.toObject();
	}

	/** Converts the Node to an object. */
	toObject(): NodeObject<T> {
		return {
			value: this.value,
			count: this.count,
			left: this.left?.toObject(),
			right: this.right?.toObject(),
		};
	}
}

interface NodeObject<T> {
	value: T;
	count: number;
	left?: NodeObject<T> | undefined;
	right?: NodeObject<T> | undefined;
}
