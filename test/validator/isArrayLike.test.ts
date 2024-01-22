import { isArrayLike } from "../../src/index.ts";
import { args } from "./__mocks__.ts";

test("return true if `value` is an array-like object", () => {
	expect(isArrayLike(args)).toBe(true);
	expect(isArrayLike([1, 2, 3])).toBe(true);
	expect(isArrayLike({ 0: "a", length: 1 })).toBe(true);
	expect(isArrayLike("a")).toBe(true);
});

test("return false if `value` is not an array-like object", () => {
	expect(isArrayLike(Function)).toBe(false);
	expect(isArrayLike({})).toBe(false);
	expect(isArrayLike(undefined)).toBe(false);
	expect(isArrayLike(null)).toBe(false);
	expect(isArrayLike(1)).toBe(false);
	expect(isArrayLike(true)).toBe(false);
	expect(isArrayLike(Symbol())).toBe(false);
});
