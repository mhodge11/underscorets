import { isBigUint64Array } from "@validate/index.ts";

test("return true if `value` is a BigUint64Array", () => {
	expect(isBigUint64Array(new BigUint64Array())).toBe(true);
});

test("return false if `value` is not a BigUint64Array", () => {
	expect(isBigUint64Array(Function)).toBe(false);
	expect(isBigUint64Array({})).toBe(false);
	expect(isBigUint64Array(undefined)).toBe(false);
	expect(isBigUint64Array(null)).toBe(false);
	expect(isBigUint64Array(1)).toBe(false);
	expect(isBigUint64Array(true)).toBe(false);
	expect(isBigUint64Array(Symbol())).toBe(false);
	expect(isBigUint64Array(new ArrayBuffer(2))).toBe(false);
	expect(isBigUint64Array(new BigInt64Array())).toBe(false);
	expect(isBigUint64Array(new Float32Array())).toBe(false);
	expect(isBigUint64Array(new Float64Array())).toBe(false);
	expect(isBigUint64Array(new Int8Array())).toBe(false);
	expect(isBigUint64Array(new Int16Array())).toBe(false);
	expect(isBigUint64Array(new Int32Array())).toBe(false);
	expect(isBigUint64Array(new Uint8Array())).toBe(false);
	expect(isBigUint64Array(new Uint8ClampedArray())).toBe(false);
	expect(isBigUint64Array(new Uint16Array())).toBe(false);
	expect(isBigUint64Array(new Uint32Array())).toBe(false);
});
