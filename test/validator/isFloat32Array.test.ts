import { isFloat32Array } from "../../src/index.ts";

test("return true if `value` is a Float32Array", () => {
	expect(isFloat32Array(new Float32Array())).toBe(true);
});

test("return false if `value` is not a Float32Array", () => {
	expect(isFloat32Array(Function)).toBe(false);
	expect(isFloat32Array({})).toBe(false);
	expect(isFloat32Array(undefined)).toBe(false);
	expect(isFloat32Array(null)).toBe(false);
	expect(isFloat32Array(1)).toBe(false);
	expect(isFloat32Array(true)).toBe(false);
	expect(isFloat32Array(Symbol())).toBe(false);
	expect(isFloat32Array(new ArrayBuffer(2))).toBe(false);
	expect(isFloat32Array(new BigInt64Array())).toBe(false);
	expect(isFloat32Array(new BigUint64Array())).toBe(false);
	expect(isFloat32Array(new Float64Array())).toBe(false);
	expect(isFloat32Array(new Int8Array())).toBe(false);
	expect(isFloat32Array(new Int16Array())).toBe(false);
	expect(isFloat32Array(new Int32Array())).toBe(false);
	expect(isFloat32Array(new Uint8Array())).toBe(false);
	expect(isFloat32Array(new Uint8ClampedArray())).toBe(false);
	expect(isFloat32Array(new Uint16Array())).toBe(false);
	expect(isFloat32Array(new Uint32Array())).toBe(false);
});
