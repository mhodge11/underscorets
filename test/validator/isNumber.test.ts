import { validator } from "../../src/index.ts";

test("return true if `value` is a number", () => {
	expect(validator.isNumber(1)).toBe(true);
	expect(validator.isNumber(Number(1))).toBe(true);
	expect(validator.isNumber(NaN)).toBe(true);
	expect(validator.isNumber(Infinity)).toBe(true);
	expect(validator.isNumber(Number(Infinity))).toBe(true);
	expect(validator.isNumber(Number("1"))).toBe(true);
});

test("return false if `value` is not a number", () => {
	expect(validator.isNumber([1, 2, 3])).toBe(false);
	expect(validator.isNumber(Function)).toBe(false);
	expect(validator.isNumber({})).toBe(false);
	expect(validator.isNumber("abc")).toBe(false);
	expect(validator.isNumber(undefined)).toBe(false);
	expect(validator.isNumber(null)).toBe(false);
	expect(validator.isNumber(true)).toBe(false);
	expect(validator.isNumber(Symbol())).toBe(false);
});
