import { XYZ } from "@misc/index.ts";

test("creates a new xyz", () => {
	const xyz = new XYZ();
	expect(xyz).toBeInstanceOf(XYZ);
});

test("xyz has a x property", () => {
	const xyz = new XYZ();
	expect(xyz).toHaveProperty("x");
});

test("xyz has a y property", () => {
	const xyz = new XYZ();
	expect(xyz).toHaveProperty("y");
});

test("xyz has a z property", () => {
	const xyz = new XYZ();
	expect(xyz).toHaveProperty("z");
});

test("xyz can initialize with x, y, z", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can initialize with x, y", () => {
	const xyz = new XYZ(1, 2);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can initialize with x", () => {
	const xyz = new XYZ(1);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can initialize with no arguments", () => {
	const xyz = new XYZ();
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can set x", () => {
	const xyz = new XYZ();
	xyz.x = 1;
	expect(xyz.x).toBe(1);
});

test("xyz can set y", () => {
	const xyz = new XYZ();
	xyz.y = 1;
	expect(xyz.y).toBe(1);
});

test("xyz can set z", () => {
	const xyz = new XYZ();
	xyz.z = 1;
	expect(xyz.z).toBe(1);
});

test("xyz can set x, y, z", () => {
	const xyz = new XYZ();
	xyz.x = 1;
	xyz.y = 2;
	xyz.z = 3;
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static from method", () => {
	const xyz = XYZ.from(1, 2, 3);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static from method with x, y", () => {
	const xyz = XYZ.from(1, 2);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static from method with x", () => {
	const xyz = XYZ.from(1);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static from method with no arguments", () => {
	const xyz = XYZ.from();
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromObject method with an object", () => {
	const xyz = XYZ.fromObject({ x: 1, y: 2, z: 3 });
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromObject method with an object with x, y", () => {
	const xyz = XYZ.fromObject({ x: 1, y: 2 });
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromObject method with an object with x", () => {
	const xyz = XYZ.fromObject({ x: 1 });
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromObject method with an empty object", () => {
	const xyz = XYZ.fromObject({});
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a string", () => {
	const xyz = XYZ.fromString("1,2,3");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString method with a string with x, y", () => {
	const xyz = XYZ.fromString("1,2");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a string with x", () => {
	const xyz = XYZ.fromString("1");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with an empty string", () => {
	const xyz = XYZ.fromString("");
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with spaces", () => {
	const xyz = XYZ.fromString(" 1 , 2 , 3 ");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString method with spaces with x, y", () => {
	const xyz = XYZ.fromString(" 1 , 2 ");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with spaces with x", () => {
	const xyz = XYZ.fromString(" 1 ");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with spaces with an empty string", () => {
	const xyz = XYZ.fromString(" ");
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with spaced numbers", () => {
	const xyz = XYZ.fromString("1 2 3");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString with spaced numbers with x, y", () => {
	const xyz = XYZ.fromString("1 2");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with ; as a separator", () => {
	const xyz = XYZ.fromString("1;2;3");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString with ; as a separator with x, y", () => {
	const xyz = XYZ.fromString("1;2");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with | as a separator", () => {
	const xyz = XYZ.fromString("1|2|3");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString with | as a separator with x, y", () => {
	const xyz = XYZ.fromString("1|2");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with _ as a separator", () => {
	const xyz = XYZ.fromString("1_2_3");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString with _ as a separator with x, y", () => {
	const xyz = XYZ.fromString("1_2");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with a custom separator", () => {
	const xyz = XYZ.fromString("1#2#3", "#");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString with a custom separator with x, y", () => {
	const xyz = XYZ.fromString("1#2", "#");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with a custom separator with x", () => {
	const xyz = XYZ.fromString("1", "#");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString with a custom separator with an empty string", () => {
	const xyz = XYZ.fromString("", "#");
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string", () => {
	const xyz = XYZ.fromString(JSON.stringify([1, 2, 3]));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString method with a JSON string with x, y", () => {
	const xyz = XYZ.fromString(JSON.stringify([1, 2]));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string with x", () => {
	const xyz = XYZ.fromString(JSON.stringify([1]));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string with an empty array", () => {
	const xyz = XYZ.fromString(JSON.stringify([]));
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string with an object", () => {
	const xyz = XYZ.fromString(JSON.stringify({ x: 1, y: 2, z: 3 }));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can be created using the static fromString method with a JSON string with an object with x, y", () => {
	const xyz = XYZ.fromString(JSON.stringify({ x: 1, y: 2 }));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string with an object with x", () => {
	const xyz = XYZ.fromString(JSON.stringify({ x: 1 }));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method with a JSON string with an empty object", () => {
	const xyz = XYZ.fromString(JSON.stringify({}));
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be created using the static fromString method prepended with XYZ", () => {
	const xyz = XYZ.fromString("XYZ [1,2,3]");
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz should throw an error when using the static fromString method with an invalid string", () => {
	expect(() => XYZ.fromString("foo")).toThrow(Error);
});

test("xyz should throw an error when using the static fromString method with an invalid JSON string", () => {
	expect(() => XYZ.fromString("{")).toThrow(Error);
});

test("xyz can normalize an xyz array", () => {
	const xyz = XYZ.normalize([1, 2, 3]);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can normalize an xyz array with x, y", () => {
	const xyz = XYZ.normalize([1, 2]);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can normalize an xyz array with x", () => {
	const xyz = XYZ.normalize([1]);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can normalize an xyz array with an empty array", () => {
	const xyz = XYZ.normalize([]);
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can normalize an xyz instance", () => {
	const xyz = XYZ.normalize(new XYZ(1, 2, 3));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
});

test("xyz can normalize an xyz instance with x, y", () => {
	const xyz = XYZ.normalize(new XYZ(1, 2));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
});

test("xyz can normalize an xyz instance with x", () => {
	const xyz = XYZ.normalize(new XYZ(1));
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can normalize an xyz instance with no arguments", () => {
	const xyz = XYZ.normalize(new XYZ());
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with other xyzs", () => {
	const xyz = XYZ.sum(new XYZ(1, 2, 3), new XYZ(4, 5, 6));
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(7);
	expect(xyz.z).toBe(9);
});

test("xyz can sum with other xyzs with x, y", () => {
	const xyz = XYZ.sum(new XYZ(1, 2), new XYZ(4, 5));
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(7);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with other xyzs with x", () => {
	const xyz = XYZ.sum(new XYZ(1), new XYZ(4));
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with other xyzs with no arguments", () => {
	const xyz = XYZ.sum(new XYZ(), new XYZ());
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with an xyz array", () => {
	const xyz = XYZ.sum(new XYZ(1, 2, 3), [4, 5, 6]);
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(7);
	expect(xyz.z).toBe(9);
});

test("xyz can sum with an xyz array with x, y", () => {
	const xyz = XYZ.sum(new XYZ(1, 2), [4, 5]);
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(7);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with an xyz array with x", () => {
	const xyz = XYZ.sum(new XYZ(1), [4]);
	expect(xyz.x).toBe(5);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can sum with an xyz array with no arguments", () => {
	const xyz = XYZ.sum(new XYZ(), []);
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can be converted to a string", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.toString()).toBe("XYZ [1,2,3]");
});

test("xyz can be converted to a JSON string", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(JSON.stringify(xyz)).toBe("[1,2,3]");
});

test("xyz can be converted to a coordinate array", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.toCoordinate()).toEqual([1, 2, 3]);
});

test("xyz can be converted to a coordinate array with x, y", () => {
	const xyz = new XYZ(1, 2);
	expect(xyz.toCoordinate()).toEqual([1, 2, 0]);
});

test("xyz can be converted to a coordinate array with x", () => {
	const xyz = new XYZ(1);
	expect(xyz.toCoordinate()).toEqual([1, 0, 0]);
});

test("xyz can be converted to a coordinate array with no arguments", () => {
	const xyz = new XYZ();
	expect(xyz.toCoordinate()).toEqual([0, 0, 0]);
});

test("xyz can be converted to a coordinate object", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.toCoordinateObject()).toEqual({ x: 1, y: 2, z: 3 });
});

test("xyz can be converted to a coordinate object with x, y", () => {
	const xyz = new XYZ(1, 2);
	expect(xyz.toCoordinateObject()).toEqual({ x: 1, y: 2, z: 0 });
});

test("xyz can be converted to a coordinate object with x", () => {
	const xyz = new XYZ(1);
	expect(xyz.toCoordinateObject()).toEqual({ x: 1, y: 0, z: 0 });
});

test("xyz can be converted to a coordinate object with no arguments", () => {
	const xyz = new XYZ();
	expect(xyz.toCoordinateObject()).toEqual({ x: 0, y: 0, z: 0 });
});

test("xyz can add coordinates to the existing xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	xyz.add([4, 5, 6], [1, 1, 0]);
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(8);
	expect(xyz.z).toBe(9);
});

test("xyz can add coordinates to the existing xyz with x, y", () => {
	const xyz = new XYZ(1, 2);
	xyz.add([4, 5], [1, 1]);
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(8);
	expect(xyz.z).toBe(0);
});

test("xyz can add coordinates to the existing xyz with x", () => {
	const xyz = new XYZ(1);
	xyz.add([4], [1]);
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can add coordinates to the existing xyz with no arguments", () => {
	const xyz = new XYZ();
	xyz.add([], []);
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can add an xyz to the existing xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	xyz.add(new XYZ(4, 5, 6), new XYZ(1, 1, 0));
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(8);
	expect(xyz.z).toBe(9);
});

test("xyz can add an xyz to the existing xyz with x, y", () => {
	const xyz = new XYZ(1, 2);
	xyz.add(new XYZ(4, 5), new XYZ(1, 1));
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(8);
	expect(xyz.z).toBe(0);
});

test("xyz can add an xyz to the existing xyz with x", () => {
	const xyz = new XYZ(1);
	xyz.add(new XYZ(4), new XYZ(1));
	expect(xyz.x).toBe(6);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can add an xyz to the existing xyz with no arguments", () => {
	const xyz = new XYZ();
	xyz.add(new XYZ(), new XYZ());
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can plus coordinates to a new copy of the existing xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	const xyz2 = xyz.plus([4, 5, 6], [1, 1, 0]);
	expect(xyz2.x).toBe(6);
	expect(xyz2.y).toBe(8);
	expect(xyz2.z).toBe(9);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can subtract an xyz from the existing xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	xyz.subtract(new XYZ(4, 5, 6), new XYZ(1, 1, 0));
	expect(xyz.x).toBe(-4);
	expect(xyz.y).toBe(-4);
	expect(xyz.z).toBe(-3);
});

test("xyz can subtract an xyz from the existing xyz with x, y", () => {
	const xyz = new XYZ(1, 2);
	xyz.subtract(new XYZ(4, 5), new XYZ(1, 1));
	expect(xyz.x).toBe(-4);
	expect(xyz.y).toBe(-4);
	expect(xyz.z).toBe(0);
});

test("xyz can subtract an xyz from the existing xyz with x", () => {
	const xyz = new XYZ(1);
	xyz.subtract(new XYZ(4), new XYZ(1));
	expect(xyz.x).toBe(-4);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can subtract an xyz from the existing xyz with no arguments", () => {
	const xyz = new XYZ();
	xyz.subtract(new XYZ(), new XYZ());
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can minus coordinates from a new copy of the existing xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	const xyz2 = xyz.minus([4, 5, 6], [1, 1, 0]);
	expect(xyz2.x).toBe(-4);
	expect(xyz2.y).toBe(-4);
	expect(xyz2.z).toBe(-3);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can multiply an existing xyz's coordinates by a scalar", () => {
	const xyz = new XYZ(1, 2, 3);
	xyz.multiply(3);
	expect(xyz.x).toBe(3);
	expect(xyz.y).toBe(6);
	expect(xyz.z).toBe(9);
});

test("xyz can multiply an existing xyz's coordinates by a scalar with x, y", () => {
	const xyz = new XYZ(1, 2);
	xyz.multiply(3);
	expect(xyz.x).toBe(3);
	expect(xyz.y).toBe(6);
	expect(xyz.z).toBe(0);
});

test("xyz can multiply an existing xyz's coordinates by a scalar with x", () => {
	const xyz = new XYZ(1);
	xyz.multiply(3);
	expect(xyz.x).toBe(3);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can multiply an existing xyz's coordinates by a scalar with no arguments", () => {
	const xyz = new XYZ();
	xyz.multiply(3);
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
});

test("xyz can multiply an existing xyz's coordinates by a scalar with a negative scalar", () => {
	const xyz = new XYZ(1, 2, 3);
	xyz.multiply(-3);
	expect(xyz.x).toBe(-3);
	expect(xyz.y).toBe(-6);
	expect(xyz.z).toBe(-9);
});

test("xyz can times a new copy of the existing xyz's coordinates by a scalar", () => {
	const xyz = new XYZ(1, 2, 3);
	const xyz2 = xyz.times(3);
	expect(xyz2.x).toBe(3);
	expect(xyz2.y).toBe(6);
	expect(xyz2.z).toBe(9);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can copy an existing xyz's coordinates", () => {
	const xyz = new XYZ(1, 2, 3);
	const xyz2 = xyz.copy();
	expect(xyz2.x).toBe(1);
	expect(xyz2.y).toBe(2);
	expect(xyz2.z).toBe(3);
	expect(xyz.x).toBe(1);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(3);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can convert an to an XYZ representing the sign of each coordinate", () => {
	const xyz = new XYZ(-8, 2, 0);
	const xyz2 = xyz.toSign();
	expect(xyz2.x).toBe(-1);
	expect(xyz2.y).toBe(1);
	expect(xyz2.z).toBe(0);
	expect(xyz.x).toBe(-8);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can convert an to an XYZ representing the sign of each coordinate with x, y", () => {
	const xyz = new XYZ(-8, 2);
	const xyz2 = xyz.toSign();
	expect(xyz2.x).toBe(-1);
	expect(xyz2.y).toBe(1);
	expect(xyz2.z).toBe(0);
	expect(xyz.x).toBe(-8);
	expect(xyz.y).toBe(2);
	expect(xyz.z).toBe(0);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can convert an to an XYZ representing the sign of each coordinate with x", () => {
	const xyz = new XYZ(-8);
	const xyz2 = xyz.toSign();
	expect(xyz2.x).toBe(-1);
	expect(xyz2.y).toBe(0);
	expect(xyz2.z).toBe(0);
	expect(xyz.x).toBe(-8);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can convert an to an XYZ representing the sign of each coordinate with no arguments", () => {
	const xyz = new XYZ();
	const xyz2 = xyz.toSign();
	expect(xyz2.x).toBe(0);
	expect(xyz2.y).toBe(0);
	expect(xyz2.z).toBe(0);
	expect(xyz.x).toBe(0);
	expect(xyz.y).toBe(0);
	expect(xyz.z).toBe(0);
	expect(xyz2).not.toBe(xyz);
});

test("xyz can compare an xyz's equality to another xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.eq(new XYZ(1, 2, 3))).toBe(true);
	expect(xyz.eq(new XYZ(1, 2, 4))).toBe(false);
});

test("xyz can get all its neighbors", () => {
	const xyz = new XYZ(1, 2);
	const neighbors = xyz.neighbors();
	expect(neighbors).toHaveLength(4);
	expect(neighbors).toContainEqual(new XYZ(1, 1));
	expect(neighbors).toContainEqual(new XYZ(0, 2));
	expect(neighbors).toContainEqual(new XYZ(2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 3));
});

test("xyz can get all its neighbors with diagonals enabled", () => {
	const xyz = new XYZ(1, 2);
	const neighbors = xyz.neighbors(true);
	expect(neighbors).toHaveLength(8);
	expect(neighbors).toContainEqual(new XYZ(1, 1));
	expect(neighbors).toContainEqual(new XYZ(0, 2));
	expect(neighbors).toContainEqual(new XYZ(2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 1));
	expect(neighbors).toContainEqual(new XYZ(2, 1));
	expect(neighbors).toContainEqual(new XYZ(0, 3));
	expect(neighbors).toContainEqual(new XYZ(2, 3));
});

test("xyz can get all its neighbors with diagonals disabled", () => {
	const xyz = new XYZ(1, 2);
	const neighbors = xyz.neighbors(false);
	expect(neighbors).toHaveLength(4);
	expect(neighbors).toContainEqual(new XYZ(1, 1));
	expect(neighbors).toContainEqual(new XYZ(0, 2));
	expect(neighbors).toContainEqual(new XYZ(2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 3));
});

test("xyz can get all its 3d neighbors", () => {
	const xyz = new XYZ(1, 2, 3);
	const neighbors = xyz.neighbors3d();
	expect(neighbors).toHaveLength(6);
	expect(neighbors).toContainEqual(new XYZ(1, 2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 3, 3));
	expect(neighbors).toContainEqual(new XYZ(2, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 2, 4));
});

test("xyz can get all its 3d neighbors with diagonals enabled", () => {
	const xyz = new XYZ(1, 2, 3);
	const neighbors = xyz.neighbors3d(true);
	expect(neighbors).toHaveLength(18);
	expect(neighbors).toContainEqual(new XYZ(1, 2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 3, 3));
	expect(neighbors).toContainEqual(new XYZ(2, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 2, 4));
	expect(neighbors).toContainEqual(new XYZ(0, 1, 2));
	expect(neighbors).toContainEqual(new XYZ(0, 1, 4));
	expect(neighbors).toContainEqual(new XYZ(0, 3, 2));
	expect(neighbors).toContainEqual(new XYZ(0, 3, 4));
	expect(neighbors).toContainEqual(new XYZ(2, 1, 2));
	expect(neighbors).toContainEqual(new XYZ(2, 1, 4));
	expect(neighbors).toContainEqual(new XYZ(2, 3, 2));
	expect(neighbors).toContainEqual(new XYZ(2, 3, 4));
	expect(neighbors).toContainEqual(new XYZ(2, 3, 3));
	expect(neighbors).toContainEqual(new XYZ(2, 1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 3, 3));
});

test("xyz can get all its 3d neighbors with diagonals disabled", () => {
	const xyz = new XYZ(1, 2, 3);
	const neighbors = xyz.neighbors3d(false);
	expect(neighbors).toHaveLength(6);
	expect(neighbors).toContainEqual(new XYZ(1, 2, 2));
	expect(neighbors).toContainEqual(new XYZ(1, 1, 3));
	expect(neighbors).toContainEqual(new XYZ(0, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 3, 3));
	expect(neighbors).toContainEqual(new XYZ(2, 2, 3));
	expect(neighbors).toContainEqual(new XYZ(1, 2, 4));
});

test("xyz can get distance to another xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.distanceTo(new XYZ(1, 2, 3))).toBe(0);
	expect(xyz.distanceTo(new XYZ(1, 2, 4))).toBe(1);
	expect(xyz.distanceTo(new XYZ(1, 3, 3))).toBe(1);
	expect(xyz.distanceTo(new XYZ(2, 2, 3))).toBe(1);
	expect(xyz.distanceTo(new XYZ(1, 1, 3))).toBe(1);
	expect(xyz.distanceTo(new XYZ(0, 2, 3))).toBe(1);
	expect(xyz.distanceTo(new XYZ(1, 2, 2))).toBe(1);
});

test("xyz can get the taxicab distance to another xyz", () => {
	const xyz = new XYZ(1, 2, 3);
	expect(xyz.taxicabDistanceTo(new XYZ(1, 2, 3))).toBe(0);
	expect(xyz.taxicabDistanceTo(new XYZ(1, 2, 4))).toBe(1);
	expect(xyz.taxicabDistanceTo(new XYZ(1, 3, 3))).toBe(1);
	expect(xyz.taxicabDistanceTo(new XYZ(2, 2, 3))).toBe(1);
	expect(xyz.taxicabDistanceTo(new XYZ(1, 1, 3))).toBe(1);
	expect(xyz.taxicabDistanceTo(new XYZ(0, 2, 3))).toBe(1);
	expect(xyz.taxicabDistanceTo(new XYZ(1, 2, 2))).toBe(1);
});

test("xyz can get the value in a 2d coordinate plane", () => {
	const xyz = new XYZ(1, 2);
	expect(
		xyz.valueIn([
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		]),
	).toBe(8);
});

test("xyz can get the value in a 3d coordinate plane", () => {
	const xyz = new XYZ(1, 2, 2);
	expect(
		xyz.valueIn([
			[
				[1, 2, 3],
				[4, 5, 6],
			],
			[
				[7, 8, 9],
				[10, 11, 12],
			],
			[
				[13, 14, 15],
				[16, 17, 18],
			],
		]),
	).toBe(18);
});

test("xyz can perform a breadth-first search on a 2d coordinate", () => {
	const xyz = new XYZ(1, 2);
	const result = xyz.bfs({ shouldStop: (xyz) => xyz.x === 2 && xyz.y === 3 });
	expect(result.visitedKeys).toContainEqual("XYZ [1,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [2,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [1,3,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [0,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [1,1,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [3,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [2,3,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [2,1,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [1,4,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [0,3,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [-1,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [0,1,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [1,0,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [4,2,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [3,3,0]");
	expect(result.visitedKeys).toContainEqual("XYZ [3,1,0]");
	expect(result.visitedPoints).toContainEqual(new XYZ(1, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(2, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(1, 3));
	expect(result.visitedPoints).toContainEqual(new XYZ(0, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(1, 1));
	expect(result.visitedPoints).toContainEqual(new XYZ(3, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(2, 3));
	expect(result.visitedPoints).toContainEqual(new XYZ(2, 1));
	expect(result.visitedPoints).toContainEqual(new XYZ(1, 4));
	expect(result.visitedPoints).toContainEqual(new XYZ(0, 3));
	expect(result.visitedPoints).toContainEqual(new XYZ(-1, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(0, 1));
	expect(result.visitedPoints).toContainEqual(new XYZ(1, 0));
	expect(result.visitedPoints).toContainEqual(new XYZ(4, 2));
	expect(result.visitedPoints).toContainEqual(new XYZ(3, 3));
	expect(result.visitedPoints).toContainEqual(new XYZ(3, 1));
	expect(result.endPoint).toEqual(new XYZ(2, 3));
	expect(result.pathLength).toBe(2);
});
