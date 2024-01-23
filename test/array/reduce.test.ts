import { reduce } from "@array/index.ts";

test("reduce reduces an array", () => {
	expect(reduce([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
});

test("reduce reduces an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(reduce(arrayLike, (acc, n) => acc + n, 0)).toBe(10);
});

test("reduce an empty array returns the initial value", () => {
	expect(reduce([], (acc, n) => acc + n, 0)).toBe(0);
});

test("reduce an array with a single element returns the element", () => {
	expect(reduce([1], (acc, n) => acc + n, 0)).toBe(1);
});

test("reduce an array of null or undefined values without an initial value throws an error", () => {
	// @ts-expect-error - Testing for error
	expect(() => reduce([null, undefined])).toThrowError();
});
