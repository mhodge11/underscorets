import { isBoolean } from "../../src/index.ts";

test("return true if `value` is a boolean", () => {
	expect(isBoolean(true)).toBe(true);
	expect(isBoolean(false)).toBe(true);
	expect(isBoolean(Boolean(true))).toBe(true);
	expect(isBoolean(Boolean(false))).toBe(true);
});

test("return false if `value` is not a boolean", () => {
	expect(isBoolean([1, 2, 3])).toBe(false);
	expect(isBoolean(Function)).toBe(false);
	expect(isBoolean({})).toBe(false);
	expect(isBoolean("abc")).toBe(false);
	expect(isBoolean(undefined)).toBe(false);
	expect(isBoolean(null)).toBe(false);
	expect(isBoolean(1)).toBe(false);
	expect(isBoolean(Symbol())).toBe(false);
});
