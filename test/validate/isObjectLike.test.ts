import { isObjectLike } from "@validate/index.ts";

test("return true if `value` is an object", () => {
	expect(isObjectLike({})).toBe(true);
	expect(isObjectLike({ a: 1 })).toBe(true);
	expect(isObjectLike(new Object())).toBe(true);
	expect(isObjectLike([1, 2, 3])).toBe(true);
});

test("return false if `value` is not an object", () => {
	expect(isObjectLike(Function)).toBe(false);
	expect(isObjectLike("abc")).toBe(false);
	expect(isObjectLike(undefined)).toBe(false);
	expect(isObjectLike(null)).toBe(false);
	expect(isObjectLike(1)).toBe(false);
	expect(isObjectLike(true)).toBe(false);
	expect(isObjectLike(Symbol())).toBe(false);
});
