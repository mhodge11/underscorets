import { cond } from "@function/index.ts";

test("should create a conditional function", () => {
	const resultFunc = cond([
		[(value: number) => value > 1, (value: number) => value * 2],
		[(value: number) => value === 1, (value: number) => value * 3],
		[(value: number) => value === 0, (value: number) => value * 4],
	]);

	expect(resultFunc(4)).toBe(8);
	expect(resultFunc(1)).toBe(3);
	expect(resultFunc(0)).toBe(0);
});

test("should return undefined when no condition is met", () => {
	const resultFunc = cond([
		[(value: number) => value > 1, (value: number) => value * 2],
		[(value: number) => value === 1, (value: number) => value * 3],
	]);

	expect(resultFunc(0)).toBe(undefined);
});

test("should return undefined if pairs is empty", () => {
	const resultFunc = cond([]);
	expect(resultFunc(0)).toBe(undefined);
});

test("should throw error if the second value of pairs is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		cond([[() => true, 1]]);
	}).toThrowError(TypeError);
});
