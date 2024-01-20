import { validator } from "../../src/index.ts";

test("return true if `value` is a date", () => {
	expect(validator.isDate(new Date())).toBe(true);
});

test("return false if `value` is not a date", () => {
	expect(validator.isDate([1, 2, 3])).toBe(false);
	expect(validator.isDate(Function)).toBe(false);
	expect(validator.isDate({})).toBe(false);
	expect(validator.isDate("abc")).toBe(false);
	expect(validator.isDate(undefined)).toBe(false);
	expect(validator.isDate(null)).toBe(false);
	expect(validator.isDate(1)).toBe(false);
	expect(validator.isDate(true)).toBe(false);
	expect(validator.isDate(Symbol())).toBe(false);
});
