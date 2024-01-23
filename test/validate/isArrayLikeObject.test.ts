import { isArrayLikeObject } from "@validate/index.ts";

test("return true if `value` is an array-like object", () => {
	expect(isArrayLikeObject([1, 2, 3])).toBe(true);
	expect(isArrayLikeObject({ length: 1 })).toBe(true);
});

test("return false if `value` is not an array-like object", () => {
	expect(isArrayLikeObject(Function)).toBe(false);
	expect(isArrayLikeObject({})).toBe(false);
	expect(isArrayLikeObject(undefined)).toBe(false);
	expect(isArrayLikeObject(null)).toBe(false);
	expect(isArrayLikeObject(1)).toBe(false);
	expect(isArrayLikeObject(true)).toBe(false);
	expect(isArrayLikeObject(Symbol())).toBe(false);
});
