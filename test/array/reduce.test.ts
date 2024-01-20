import { array } from "../../src/index.ts";

test("array.reduce reduces an array", () => {
	expect(array.reduce([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
});

test("array.reduce reduces an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.reduce(arrayLike, (acc, n) => acc + n, 0)).toBe(10);
});

test("array.reduce an empty array returns the initial value", () => {
	expect(array.reduce([], (acc, n) => acc + n, 0)).toBe(0);
});

test("array.reduce an array with a single element returns the element", () => {
	expect(array.reduce([1], (acc, n) => acc + n, 0)).toBe(1);
});

test("array.reduce an array of null or undefined values without an initial value throws an error", () => {
	// @ts-expect-error - Testing for error
	expect(() => array.reduce([null, undefined])).toThrowError();
});
