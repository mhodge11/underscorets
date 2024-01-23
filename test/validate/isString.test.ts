import { isString } from "@validate/index.ts";

test("return true if `value` is a string", () => {
	expect(isString("abc")).toBe(true);
	expect(isString("")).toBe(true);
	expect(isString(new String("abc"))).toBe(true);
	expect(isString(String("abc"))).toBe(true);
});

test("return false if `value` is not a string", () => {
	expect(isString([1, 2, 3])).toBe(false);
	expect(isString(Function)).toBe(false);
	expect(isString({})).toBe(false);
	expect(isString(undefined)).toBe(false);
	expect(isString(null)).toBe(false);
	expect(isString(1)).toBe(false);
	expect(isString(true)).toBe(false);
	expect(isString(Symbol())).toBe(false);
});
