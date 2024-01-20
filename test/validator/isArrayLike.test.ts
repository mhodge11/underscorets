import { validator } from "../../src/index.ts";
import { args } from "./__mocks__.ts";

test("return true if `value` is an array-like object", () => {
	expect(validator.isArrayLike(args)).toBe(true);
	expect(validator.isArrayLike([1, 2, 3])).toBe(true);
	expect(validator.isArrayLike({ 0: "a", length: 1 })).toBe(true);
	expect(validator.isArrayLike("a")).toBe(true);
});

test("return false if `value` is not an array-like object", () => {
	expect(validator.isArrayLike(Function)).toBe(false);
	expect(validator.isArrayLike({})).toBe(false);
	expect(validator.isArrayLike(undefined)).toBe(false);
	expect(validator.isArrayLike(null)).toBe(false);
	expect(validator.isArrayLike(1)).toBe(false);
	expect(validator.isArrayLike(true)).toBe(false);
	expect(validator.isArrayLike(Symbol())).toBe(false);
});
