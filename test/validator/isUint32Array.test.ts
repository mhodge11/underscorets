import { validator } from "../../src/index.ts";

test("return true if `value` is a Uint32Array", () => {
	expect(validator.isUint32Array(new Uint32Array())).toBe(true);
});

test("return false if `value` is not a Uint32Array", () => {
	expect(validator.isUint32Array(Function)).toBe(false);
	expect(validator.isUint32Array({})).toBe(false);
	expect(validator.isUint32Array(undefined)).toBe(false);
	expect(validator.isUint32Array(null)).toBe(false);
	expect(validator.isUint32Array(1)).toBe(false);
	expect(validator.isUint32Array(true)).toBe(false);
	expect(validator.isUint32Array(Symbol())).toBe(false);
	expect(validator.isUint32Array(new ArrayBuffer(2))).toBe(false);
	expect(validator.isUint32Array(new BigInt64Array())).toBe(false);
	expect(validator.isUint32Array(new BigUint64Array())).toBe(false);
	expect(validator.isUint32Array(new Float32Array())).toBe(false);
	expect(validator.isUint32Array(new Float64Array())).toBe(false);
	expect(validator.isUint32Array(new Int8Array())).toBe(false);
	expect(validator.isUint32Array(new Int16Array())).toBe(false);
	expect(validator.isUint32Array(new Int32Array())).toBe(false);
	expect(validator.isUint32Array(new Uint8Array())).toBe(false);
	expect(validator.isUint32Array(new Uint8ClampedArray())).toBe(false);
	expect(validator.isUint32Array(new Uint16Array())).toBe(false);
});
