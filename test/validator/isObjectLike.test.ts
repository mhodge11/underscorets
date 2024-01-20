import { validator } from "../../src/index.ts";

test("return true if `value` is an object", () => {
	expect(validator.isObjectLike({})).toBe(true);
	expect(validator.isObjectLike({ a: 1 })).toBe(true);
	expect(validator.isObjectLike(new Object())).toBe(true);
	expect(validator.isObjectLike([1, 2, 3])).toBe(true);
});

test("return false if `value` is not an object", () => {
	expect(validator.isObjectLike(Function)).toBe(false);
	expect(validator.isObjectLike("abc")).toBe(false);
	expect(validator.isObjectLike(undefined)).toBe(false);
	expect(validator.isObjectLike(null)).toBe(false);
	expect(validator.isObjectLike(1)).toBe(false);
	expect(validator.isObjectLike(true)).toBe(false);
	expect(validator.isObjectLike(Symbol())).toBe(false);
});
