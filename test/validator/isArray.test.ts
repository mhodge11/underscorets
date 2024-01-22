import { isArray } from "../../src/index.ts";

test("return true if `value` is an array", () => {
	expect(isArray([1, 2, 3])).toBe(true);
	expect(isArray([])).toBe(true);
	expect(isArray(new Array())).toBe(true);
	expect(isArray(new Array(1, 2, 3))).toBe(true);
	expect(isArray(new Array(3))).toBe(true);
	expect(isArray(new Array("abc"))).toBe(true);
	expect(isArray(new Array(true))).toBe(true);
	expect(isArray(new Array(null))).toBe(true);
	expect(isArray(new Array(undefined))).toBe(true);
});

test("return false if `value` is not an array", () => {
	expect(isArray(new ArrayBuffer(2))).toBe(false);
	expect(isArray(Function)).toBe(false);
	expect(isArray({})).toBe(false);
	expect(isArray("abc")).toBe(false);
	expect(isArray(undefined)).toBe(false);
	expect(isArray(null)).toBe(false);
	expect(isArray(1)).toBe(false);
	expect(isArray(true)).toBe(false);
	expect(isArray(Symbol())).toBe(false);
});
