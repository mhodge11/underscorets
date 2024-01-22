import { isObject } from "../../src/index.ts";

test("return true if `value` is an object", () => {
	expect(isObject({})).toBe(true);
	expect(isObject({ a: 1 })).toBe(true);
	expect(isObject(new Object())).toBe(true);
	expect(isObject(Function)).toBe(true);
	expect(isObject([1, 2, 3])).toBe(true);
	expect(isObject(new Number(1))).toBe(true);
	expect(isObject(new String("abc"))).toBe(true);
	expect(isObject(new Boolean(true))).toBe(true);
	expect(isObject(new Date())).toBe(true);
	expect(isObject(/a/)).toBe(true);
	expect(isObject(new Map())).toBe(true);
	expect(isObject(new Set())).toBe(true);
});

test("return false if `value` is not an object", () => {
	expect(isObject("abc")).toBe(false);
	expect(isObject(undefined)).toBe(false);
	expect(isObject(null)).toBe(false);
	expect(isObject(1)).toBe(false);
	expect(isObject(true)).toBe(false);
	expect(isObject(Symbol())).toBe(false);
});
