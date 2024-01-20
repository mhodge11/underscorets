import { validator } from "../../src/index.ts";

test("return true if `value` is null", () => {
	expect(validator.isNull(null)).toBe(true);
});

test("return false if `value` is not null", () => {
	expect(validator.isNull([1, 2, 3])).toBe(false);
	expect(validator.isNull(Function)).toBe(false);
	expect(validator.isNull({})).toBe(false);
	expect(validator.isNull("abc")).toBe(false);
	expect(validator.isNull(undefined)).toBe(false);
	expect(validator.isNull(1)).toBe(false);
	expect(validator.isNull(true)).toBe(false);
	expect(validator.isNull(Symbol())).toBe(false);
});
