import { isTypedArray } from "@validate/index.ts";

test("return true if `value` is a typed array", () => {
	expect(isTypedArray(new Int8Array())).toBe(true);
	expect(isTypedArray(new Uint8Array())).toBe(true);
	expect(isTypedArray(new Uint8ClampedArray())).toBe(true);
	expect(isTypedArray(new Int16Array())).toBe(true);
	expect(isTypedArray(new Uint16Array())).toBe(true);
	expect(isTypedArray(new Int32Array())).toBe(true);
	expect(isTypedArray(new Uint32Array())).toBe(true);
	expect(isTypedArray(new Float32Array())).toBe(true);
	expect(isTypedArray(new Float64Array())).toBe(true);
});

test("return false if `value` is not a typed array", () => {
	expect(isTypedArray([1, 2, 3])).toBe(false);
	expect(isTypedArray(Function)).toBe(false);
	expect(isTypedArray({})).toBe(false);
	expect(isTypedArray("abc")).toBe(false);
	expect(isTypedArray(undefined)).toBe(false);
	expect(isTypedArray(null)).toBe(false);
	expect(isTypedArray(1)).toBe(false);
	expect(isTypedArray(true)).toBe(false);
	expect(isTypedArray(Symbol())).toBe(false);
});
