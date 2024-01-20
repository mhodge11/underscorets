import { validator } from "../../src/index.ts";

test("return true if `value` is a Int16Array", () => {
	expect(validator.isInt16Array(new Int16Array())).toBe(true);
});

test("return false if `value` is not a Int16Array", () => {
	expect(validator.isInt16Array(Function)).toBe(false);
	expect(validator.isInt16Array({})).toBe(false);
	expect(validator.isInt16Array(undefined)).toBe(false);
	expect(validator.isInt16Array(null)).toBe(false);
	expect(validator.isInt16Array(1)).toBe(false);
	expect(validator.isInt16Array(true)).toBe(false);
	expect(validator.isInt16Array(Symbol())).toBe(false);
	expect(validator.isInt16Array(new ArrayBuffer(2))).toBe(false);
	expect(validator.isInt16Array(new BigInt64Array())).toBe(false);
	expect(validator.isInt16Array(new BigUint64Array())).toBe(false);
	expect(validator.isInt16Array(new Float32Array())).toBe(false);
	expect(validator.isInt16Array(new Float64Array())).toBe(false);
	expect(validator.isInt16Array(new Int8Array())).toBe(false);
	expect(validator.isInt16Array(new Int32Array())).toBe(false);
	expect(validator.isInt16Array(new Uint8Array())).toBe(false);
	expect(validator.isInt16Array(new Uint8ClampedArray())).toBe(false);
	expect(validator.isInt16Array(new Uint16Array())).toBe(false);
	expect(validator.isInt16Array(new Uint32Array())).toBe(false);
});
