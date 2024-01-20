import { validator } from "../../src/index.ts";

test("return true if `value` is an array buffer", () => {
	expect(validator.isArrayBuffer(new ArrayBuffer(2))).toBe(true);
});

test("return false if `value` is not an array buffer", () => {
	expect(validator.isArrayBuffer([1, 2, 3])).toBe(false);
	expect(validator.isArrayBuffer(Function)).toBe(false);
	expect(validator.isArrayBuffer({})).toBe(false);
	expect(validator.isArrayBuffer("abc")).toBe(false);
	expect(validator.isArrayBuffer(undefined)).toBe(false);
	expect(validator.isArrayBuffer(null)).toBe(false);
	expect(validator.isArrayBuffer(1)).toBe(false);
	expect(validator.isArrayBuffer(true)).toBe(false);
	expect(validator.isArrayBuffer(Symbol())).toBe(false);
});
