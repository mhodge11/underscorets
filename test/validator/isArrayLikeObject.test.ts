import { validator } from "../../src/index.ts";

test("return true if `value` is an array-like object", () => {
	expect(validator.isArrayLikeObject([1, 2, 3])).toBe(true);
	expect(validator.isArrayLikeObject({ length: 1 })).toBe(true);
});

test("return false if `value` is not an array-like object", () => {
	expect(validator.isArrayLikeObject(Function)).toBe(false);
	expect(validator.isArrayLikeObject({})).toBe(false);
	expect(validator.isArrayLikeObject(undefined)).toBe(false);
	expect(validator.isArrayLikeObject(null)).toBe(false);
	expect(validator.isArrayLikeObject(1)).toBe(false);
	expect(validator.isArrayLikeObject(true)).toBe(false);
	expect(validator.isArrayLikeObject(Symbol())).toBe(false);
});
