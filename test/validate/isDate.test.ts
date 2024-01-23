import { isDate } from "@validate/index.ts";

test("return true if `value` is a date", () => {
	expect(isDate(new Date())).toBe(true);
});

test("return false if `value` is not a date", () => {
	expect(isDate([1, 2, 3])).toBe(false);
	expect(isDate(Function)).toBe(false);
	expect(isDate({})).toBe(false);
	expect(isDate("abc")).toBe(false);
	expect(isDate(undefined)).toBe(false);
	expect(isDate(null)).toBe(false);
	expect(isDate(1)).toBe(false);
	expect(isDate(true)).toBe(false);
	expect(isDate(Symbol())).toBe(false);
});
