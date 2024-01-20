import { array } from "../../src/index.ts";

test("array.reduceRight reduces an array", () => {
	expect(array.reduceRight([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
});

test("array.reduceRight reduces an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.reduceRight(arrayLike, (acc, n) => acc + n, 0)).toBe(10);
});

test("array.reduceRight an empty array returns the initial value", () => {
	expect(array.reduceRight([], (acc, n) => acc + n, 0)).toBe(0);
});

test("array.reduceRight an array with a single element returns the element", () => {
	expect(array.reduceRight([1], (acc, n) => acc + n, 0)).toBe(1);
});

test("array.reduceRight an array of null or undefined values without an initial value throws an error", () => {
	// @ts-expect-error - Testing for error
	expect(() => array.reduceRight([null, undefined])).toThrowError();
});
