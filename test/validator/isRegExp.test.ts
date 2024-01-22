import { isRegExp } from "../../src/index.ts";

test("return true if `value` is a regular expression", () => {
	expect(isRegExp(/abc/)).toBe(true);
	expect(isRegExp(/abc/)).toBe(true);
});

test("return false if `value` is not a regular expression", () => {
	expect(isRegExp([1, 2, 3])).toBe(false);
	expect(isRegExp(Function)).toBe(false);
	expect(isRegExp({})).toBe(false);
	expect(isRegExp("abc")).toBe(false);
	expect(isRegExp(undefined)).toBe(false);
	expect(isRegExp(null)).toBe(false);
	expect(isRegExp(1)).toBe(false);
	expect(isRegExp(true)).toBe(false);
	expect(isRegExp(Symbol())).toBe(false);
});
