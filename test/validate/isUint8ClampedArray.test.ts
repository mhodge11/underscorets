import { isUint8ClampedArray } from "@validate/index.ts";

test("return true if `value` is a Uint8ClampedArray", () => {
	expect(isUint8ClampedArray(new Uint8ClampedArray())).toBe(true);
});

test("return false if `value` is not a Uint8ClampedArray", () => {
	expect(isUint8ClampedArray(Function)).toBe(false);
	expect(isUint8ClampedArray({})).toBe(false);
	expect(isUint8ClampedArray(undefined)).toBe(false);
	expect(isUint8ClampedArray(null)).toBe(false);
	expect(isUint8ClampedArray(1)).toBe(false);
	expect(isUint8ClampedArray(true)).toBe(false);
	expect(isUint8ClampedArray(Symbol())).toBe(false);
	expect(isUint8ClampedArray(new ArrayBuffer(2))).toBe(false);
	expect(isUint8ClampedArray(new BigInt64Array())).toBe(false);
	expect(isUint8ClampedArray(new BigUint64Array())).toBe(false);
	expect(isUint8ClampedArray(new Float32Array())).toBe(false);
	expect(isUint8ClampedArray(new Float64Array())).toBe(false);
	expect(isUint8ClampedArray(new Int8Array())).toBe(false);
	expect(isUint8ClampedArray(new Int16Array())).toBe(false);
	expect(isUint8ClampedArray(new Int32Array())).toBe(false);
	expect(isUint8ClampedArray(new Uint8Array())).toBe(false);
	expect(isUint8ClampedArray(new Uint16Array())).toBe(false);
	expect(isUint8ClampedArray(new Uint32Array())).toBe(false);
});
