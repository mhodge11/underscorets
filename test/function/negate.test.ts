import { negate } from "@function/index.ts";

test("should negate `predicate`", () => {
	const func = negate((n: number) => n > 5);
	expect([1, 5, 10].filter(func)).toEqual([1, 5]);
});

test("should throw error if `predicate` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		negate(1);
	}).toThrowError(TypeError);
});
