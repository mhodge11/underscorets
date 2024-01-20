import { validator } from "../../src/index.ts";

test("return true if `value` is a typed array", () => {
	expect(validator.isTypedArray(new Int8Array())).toBe(true);
	expect(validator.isTypedArray(new Uint8Array())).toBe(true);
	expect(validator.isTypedArray(new Uint8ClampedArray())).toBe(true);
	expect(validator.isTypedArray(new Int16Array())).toBe(true);
	expect(validator.isTypedArray(new Uint16Array())).toBe(true);
	expect(validator.isTypedArray(new Int32Array())).toBe(true);
	expect(validator.isTypedArray(new Uint32Array())).toBe(true);
	expect(validator.isTypedArray(new Float32Array())).toBe(true);
	expect(validator.isTypedArray(new Float64Array())).toBe(true);
});

test("return false if `value` is not a typed array", () => {
	expect(validator.isTypedArray([1, 2, 3])).toBe(false);
	expect(validator.isTypedArray(Function)).toBe(false);
	expect(validator.isTypedArray({})).toBe(false);
	expect(validator.isTypedArray("abc")).toBe(false);
	expect(validator.isTypedArray(undefined)).toBe(false);
	expect(validator.isTypedArray(null)).toBe(false);
	expect(validator.isTypedArray(1)).toBe(false);
	expect(validator.isTypedArray(true)).toBe(false);
	expect(validator.isTypedArray(Symbol())).toBe(false);
});
