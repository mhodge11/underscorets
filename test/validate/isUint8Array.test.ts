import { isUint8Array } from "@validate/index.ts";

test("return true if `value` is a Uint8Array", () => {
	expect(isUint8Array(new Uint8Array())).toBe(true);
});

test("return false if `value` is not a Uint8Array", () => {
	expect(isUint8Array(Function)).toBe(false);
	expect(isUint8Array({})).toBe(false);
	expect(isUint8Array(undefined)).toBe(false);
	expect(isUint8Array(null)).toBe(false);
	expect(isUint8Array(1)).toBe(false);
	expect(isUint8Array(true)).toBe(false);
	expect(isUint8Array(Symbol())).toBe(false);
	expect(isUint8Array(new ArrayBuffer(2))).toBe(false);
	expect(isUint8Array(new BigInt64Array())).toBe(false);
	expect(isUint8Array(new BigUint64Array())).toBe(false);
	expect(isUint8Array(new Float32Array())).toBe(false);
	expect(isUint8Array(new Float64Array())).toBe(false);
	expect(isUint8Array(new Int8Array())).toBe(false);
	expect(isUint8Array(new Int16Array())).toBe(false);
	expect(isUint8Array(new Int32Array())).toBe(false);
	expect(isUint8Array(new Uint8ClampedArray())).toBe(false);
	expect(isUint8Array(new Uint16Array())).toBe(false);
	expect(isUint8Array(new Uint32Array())).toBe(false);
});
