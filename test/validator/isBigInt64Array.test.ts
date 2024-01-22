import { isBigInt64Array } from "../../src/index.ts";

test("return true if `value` is a BigInt64Array", () => {
	expect(isBigInt64Array(new BigInt64Array())).toBe(true);
});

test("return false if `value` is not a BigInt64Array", () => {
	expect(isBigInt64Array(Function)).toBe(false);
	expect(isBigInt64Array({})).toBe(false);
	expect(isBigInt64Array(undefined)).toBe(false);
	expect(isBigInt64Array(null)).toBe(false);
	expect(isBigInt64Array(1)).toBe(false);
	expect(isBigInt64Array(true)).toBe(false);
	expect(isBigInt64Array(Symbol())).toBe(false);
	expect(isBigInt64Array(new ArrayBuffer(2))).toBe(false);
	expect(isBigInt64Array(new BigUint64Array())).toBe(false);
	expect(isBigInt64Array(new Float32Array())).toBe(false);
	expect(isBigInt64Array(new Float64Array())).toBe(false);
	expect(isBigInt64Array(new Int8Array())).toBe(false);
	expect(isBigInt64Array(new Int16Array())).toBe(false);
	expect(isBigInt64Array(new Int32Array())).toBe(false);
	expect(isBigInt64Array(new Uint8Array())).toBe(false);
	expect(isBigInt64Array(new Uint8ClampedArray())).toBe(false);
	expect(isBigInt64Array(new Uint16Array())).toBe(false);
	expect(isBigInt64Array(new Uint32Array())).toBe(false);
});
