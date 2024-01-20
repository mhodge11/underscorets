import { validator } from "../../src/index.ts";

test("return true if `value` is an array", () => {
	expect(validator.isArray([1, 2, 3])).toBe(true);
	expect(validator.isArray([])).toBe(true);
	expect(validator.isArray(new Array())).toBe(true);
	expect(validator.isArray(new Array(1, 2, 3))).toBe(true);
	expect(validator.isArray(new Array(3))).toBe(true);
	expect(validator.isArray(new Array("abc"))).toBe(true);
	expect(validator.isArray(new Array(true))).toBe(true);
	expect(validator.isArray(new Array(null))).toBe(true);
	expect(validator.isArray(new Array(undefined))).toBe(true);
});

test("return false if `value` is not an array", () => {
	expect(validator.isArray(new ArrayBuffer(2))).toBe(false);
	expect(validator.isArray(Function)).toBe(false);
	expect(validator.isArray({})).toBe(false);
	expect(validator.isArray("abc")).toBe(false);
	expect(validator.isArray(undefined)).toBe(false);
	expect(validator.isArray(null)).toBe(false);
	expect(validator.isArray(1)).toBe(false);
	expect(validator.isArray(true)).toBe(false);
	expect(validator.isArray(Symbol())).toBe(false);
});
