import { isInt32Array } from "@validate/index.ts";

test("return true if `value` is a Int32Array", () => {
	expect(isInt32Array(new Int32Array())).toBe(true);
});

test("return false if `value` is not a Int32Array", () => {
	expect(isInt32Array(Function)).toBe(false);
	expect(isInt32Array({})).toBe(false);
	expect(isInt32Array(undefined)).toBe(false);
	expect(isInt32Array(null)).toBe(false);
	expect(isInt32Array(1)).toBe(false);
	expect(isInt32Array(true)).toBe(false);
	expect(isInt32Array(Symbol())).toBe(false);
	expect(isInt32Array(new ArrayBuffer(2))).toBe(false);
	expect(isInt32Array(new BigInt64Array())).toBe(false);
	expect(isInt32Array(new BigUint64Array())).toBe(false);
	expect(isInt32Array(new Float32Array())).toBe(false);
	expect(isInt32Array(new Float64Array())).toBe(false);
	expect(isInt32Array(new Int8Array())).toBe(false);
	expect(isInt32Array(new Int16Array())).toBe(false);
	expect(isInt32Array(new Uint8Array())).toBe(false);
	expect(isInt32Array(new Uint8ClampedArray())).toBe(false);
	expect(isInt32Array(new Uint16Array())).toBe(false);
	expect(isInt32Array(new Uint32Array())).toBe(false);
});
