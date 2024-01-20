import { validator } from "../../src/index.ts";

test("return true if `value` is a string", () => {
	expect(validator.isString("abc")).toBe(true);
	expect(validator.isString("")).toBe(true);
	expect(validator.isString(new String("abc"))).toBe(true);
	expect(validator.isString(String("abc"))).toBe(true);
});

test("return false if `value` is not a string", () => {
	expect(validator.isString([1, 2, 3])).toBe(false);
	expect(validator.isString(Function)).toBe(false);
	expect(validator.isString({})).toBe(false);
	expect(validator.isString(undefined)).toBe(false);
	expect(validator.isString(null)).toBe(false);
	expect(validator.isString(1)).toBe(false);
	expect(validator.isString(true)).toBe(false);
	expect(validator.isString(Symbol())).toBe(false);
});
