import { validator } from "../../src/index.ts";

test("return true if `value` is a boolean", () => {
	expect(validator.isBoolean(true)).toBe(true);
	expect(validator.isBoolean(false)).toBe(true);
	expect(validator.isBoolean(Boolean(true))).toBe(true);
	expect(validator.isBoolean(Boolean(false))).toBe(true);
});

test("return false if `value` is not a boolean", () => {
	expect(validator.isBoolean([1, 2, 3])).toBe(false);
	expect(validator.isBoolean(Function)).toBe(false);
	expect(validator.isBoolean({})).toBe(false);
	expect(validator.isBoolean("abc")).toBe(false);
	expect(validator.isBoolean(undefined)).toBe(false);
	expect(validator.isBoolean(null)).toBe(false);
	expect(validator.isBoolean(1)).toBe(false);
	expect(validator.isBoolean(Symbol())).toBe(false);
});
