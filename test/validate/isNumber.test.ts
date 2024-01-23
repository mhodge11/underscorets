import { isNumber } from "@validate/index.ts";

test("return true if `value` is a number", () => {
	expect(isNumber(1)).toBe(true);
	expect(isNumber(Number(1))).toBe(true);
	expect(isNumber(NaN)).toBe(true);
	expect(isNumber(Infinity)).toBe(true);
	expect(isNumber(Number(Infinity))).toBe(true);
	expect(isNumber(Number("1"))).toBe(true);
});

test("return false if `value` is not a number", () => {
	expect(isNumber([1, 2, 3])).toBe(false);
	expect(isNumber(Function)).toBe(false);
	expect(isNumber({})).toBe(false);
	expect(isNumber("abc")).toBe(false);
	expect(isNumber(undefined)).toBe(false);
	expect(isNumber(null)).toBe(false);
	expect(isNumber(true)).toBe(false);
	expect(isNumber(Symbol())).toBe(false);
});
