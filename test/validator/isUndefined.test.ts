import { validator } from "../../src/index.ts";

test("return true if `value` is undefined", () => {
	expect(validator.isUndefined(undefined)).toBe(true);
});

test("return false if `value` is not undefined", () => {
	expect(validator.isUndefined([1, 2, 3])).toBe(false);
	expect(validator.isUndefined(Function)).toBe(false);
	expect(validator.isUndefined({})).toBe(false);
	expect(validator.isUndefined("abc")).toBe(false);
	expect(validator.isUndefined(null)).toBe(false);
	expect(validator.isUndefined(1)).toBe(false);
	expect(validator.isUndefined(true)).toBe(false);
	expect(validator.isUndefined(Symbol())).toBe(false);
});
