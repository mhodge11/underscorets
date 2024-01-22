import { isUint16Array } from "../../src/index.ts";

test("return true if `value` is a Uint16Array", () => {
	expect(isUint16Array(new Uint16Array())).toBe(true);
});

test("return false if `value` is not a Uint16Array", () => {
	expect(isUint16Array(Function)).toBe(false);
	expect(isUint16Array({})).toBe(false);
	expect(isUint16Array(undefined)).toBe(false);
	expect(isUint16Array(null)).toBe(false);
	expect(isUint16Array(1)).toBe(false);
	expect(isUint16Array(true)).toBe(false);
	expect(isUint16Array(Symbol())).toBe(false);
	expect(isUint16Array(new ArrayBuffer(2))).toBe(false);
	expect(isUint16Array(new BigInt64Array())).toBe(false);
	expect(isUint16Array(new BigUint64Array())).toBe(false);
	expect(isUint16Array(new Float32Array())).toBe(false);
	expect(isUint16Array(new Float64Array())).toBe(false);
	expect(isUint16Array(new Int8Array())).toBe(false);
	expect(isUint16Array(new Int16Array())).toBe(false);
	expect(isUint16Array(new Int32Array())).toBe(false);
	expect(isUint16Array(new Uint8Array())).toBe(false);
	expect(isUint16Array(new Uint8ClampedArray())).toBe(false);
	expect(isUint16Array(new Uint32Array())).toBe(false);
});
