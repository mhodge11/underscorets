import { validator } from "../../src/index.ts";

test("return true if `value` is null or undefined", () => {
	expect(validator.isNil(null)).toBe(true);
	expect(validator.isNil(undefined)).toBe(true);
});

test("return false if `value` is not null or undefined", () => {
	expect(validator.isNil([1, 2, 3])).toBe(false);
	expect(validator.isNil(Function)).toBe(false);
	expect(validator.isNil({})).toBe(false);
	expect(validator.isNil("abc")).toBe(false);
	expect(validator.isNil(1)).toBe(false);
	expect(validator.isNil(true)).toBe(false);
	expect(validator.isNil(Symbol())).toBe(false);
});
