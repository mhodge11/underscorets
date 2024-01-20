import { validator } from "../../src/index.ts";

test("return true if `value` is a regular expression", () => {
	expect(validator.isRegExp(/abc/)).toBe(true);
	expect(validator.isRegExp(/abc/)).toBe(true);
});

test("return false if `value` is not a regular expression", () => {
	expect(validator.isRegExp([1, 2, 3])).toBe(false);
	expect(validator.isRegExp(Function)).toBe(false);
	expect(validator.isRegExp({})).toBe(false);
	expect(validator.isRegExp("abc")).toBe(false);
	expect(validator.isRegExp(undefined)).toBe(false);
	expect(validator.isRegExp(null)).toBe(false);
	expect(validator.isRegExp(1)).toBe(false);
	expect(validator.isRegExp(true)).toBe(false);
	expect(validator.isRegExp(Symbol())).toBe(false);
});
