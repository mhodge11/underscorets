import { validator } from "../../src/index.ts";

test("return true if `value` is a set", () => {
	expect(validator.isSet(new Set())).toBe(true);
});

test("return false if `value` is not a set", () => {
	expect(validator.isSet([1, 2, 3])).toBe(false);
	expect(validator.isSet(Function)).toBe(false);
	expect(validator.isSet({})).toBe(false);
	expect(validator.isSet("abc")).toBe(false);
	expect(validator.isSet(undefined)).toBe(false);
	expect(validator.isSet(null)).toBe(false);
	expect(validator.isSet(1)).toBe(false);
	expect(validator.isSet(true)).toBe(false);
	expect(validator.isSet(Symbol())).toBe(false);
});
