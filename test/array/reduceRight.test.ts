import { reduceRight } from "../../src/index.ts";

test("reduceRight reduces an array", () => {
	expect(reduceRight([1, 2, 3, 4], (acc, n) => acc + n, 0)).toBe(10);
});

test("reduceRight reduces an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(reduceRight(arrayLike, (acc, n) => acc + n, 0)).toBe(10);
});

test("reduceRight an empty array returns the initial value", () => {
	expect(reduceRight([], (acc, n) => acc + n, 0)).toBe(0);
});

test("reduceRight an array with a single element returns the element", () => {
	expect(reduceRight([1], (acc, n) => acc + n, 0)).toBe(1);
});

test("reduceRight an array of null or undefined values without an initial value throws an error", () => {
	// @ts-expect-error - Testing for error
	expect(() => reduceRight([null, undefined])).toThrowError();
});
