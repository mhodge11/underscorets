import { isPlainObject } from "../../src/index.ts";

test("return true for plain objects", () => {
	expect(isPlainObject({})).toBe(true);
	expect(isPlainObject({ a: 1 })).toBe(true);
});

test("return false for non-plain objects", () => {
	expect(isPlainObject(null)).toBe(false);
	expect(isPlainObject("1")).toBe(false);
	expect(isPlainObject([])).toBe(false);
	expect(isPlainObject(new Function())).toBe(false);
	expect(isPlainObject(new Date())).toBe(false);
});
