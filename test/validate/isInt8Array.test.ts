import { isInt8Array } from "@validate/index.ts";

test("return true if `value` is a Int8Array", () => {
	expect(isInt8Array(new Int8Array())).toBe(true);
});

test("return false if `value` is not a Int8Array", () => {
	expect(isInt8Array(Function)).toBe(false);
	expect(isInt8Array({})).toBe(false);
	expect(isInt8Array(undefined)).toBe(false);
	expect(isInt8Array(null)).toBe(false);
	expect(isInt8Array(1)).toBe(false);
	expect(isInt8Array(true)).toBe(false);
	expect(isInt8Array(Symbol())).toBe(false);
	expect(isInt8Array(new ArrayBuffer(2))).toBe(false);
	expect(isInt8Array(new BigInt64Array())).toBe(false);
	expect(isInt8Array(new BigUint64Array())).toBe(false);
	expect(isInt8Array(new Float32Array())).toBe(false);
	expect(isInt8Array(new Float64Array())).toBe(false);
	expect(isInt8Array(new Int16Array())).toBe(false);
	expect(isInt8Array(new Int32Array())).toBe(false);
	expect(isInt8Array(new Uint8Array())).toBe(false);
	expect(isInt8Array(new Uint8ClampedArray())).toBe(false);
	expect(isInt8Array(new Uint16Array())).toBe(false);
	expect(isInt8Array(new Uint32Array())).toBe(false);
});
