import { array } from "../../src/index.ts";

test("array.move an element within an array", () => {
	expect(array.move([1, 2, 3, 4, 5], 0, 2)).toStrictEqual([2, 3, 1, 4, 5]);
	expect(array.move([1, 2, 3, 4, 5], 2, 0)).toStrictEqual([3, 1, 2, 4, 5]);
});

test("return the original array if 'fromIndex' is equal to 'toIndex'", () => {
	expect(array.move([1, 2, 3, 4, 5], 0, 0)).toStrictEqual([1, 2, 3, 4, 5]);
});

test("throw an error if 'fromIndex' is out of bounds", () => {
	expect(() => array.move([1, 2, 3, 4, 5], -1, 0)).toThrow();
	expect(() => array.move([1, 2, 3, 4, 5], 5, 0)).toThrow();
});

test("throw an error if 'toIndex' is out of bounds", () => {
	expect(() => array.move([1, 2, 3, 4, 5], 0, -1)).toThrow();
	expect(() => array.move([1, 2, 3, 4, 5], 0, 5)).toThrow();
});
