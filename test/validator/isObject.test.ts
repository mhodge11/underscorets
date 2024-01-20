import { validator } from "../../src/index.ts";

test("return true if `value` is an object", () => {
	expect(validator.isObject({})).toBe(true);
	expect(validator.isObject({ a: 1 })).toBe(true);
	expect(validator.isObject(new Object())).toBe(true);
	expect(validator.isObject(Function)).toBe(true);
	expect(validator.isObject([1, 2, 3])).toBe(true);
	expect(validator.isObject(new Number(1))).toBe(true);
	expect(validator.isObject(new String("abc"))).toBe(true);
	expect(validator.isObject(new Boolean(true))).toBe(true);
	expect(validator.isObject(new Date())).toBe(true);
	expect(validator.isObject(/a/)).toBe(true);
	expect(validator.isObject(new Map())).toBe(true);
	expect(validator.isObject(new Set())).toBe(true);
});

test("return false if `value` is not an object", () => {
	expect(validator.isObject("abc")).toBe(false);
	expect(validator.isObject(undefined)).toBe(false);
	expect(validator.isObject(null)).toBe(false);
	expect(validator.isObject(1)).toBe(false);
	expect(validator.isObject(true)).toBe(false);
	expect(validator.isObject(Symbol())).toBe(false);
});
