import { isPrimitive } from "@validate/index.ts";

test("return true if `value` is a primitive value", () => {
	expect(isPrimitive(1)).toBe(true);
	expect(isPrimitive("abc")).toBe(true);
	expect(isPrimitive(true)).toBe(true);
	expect(isPrimitive(false)).toBe(true);
	expect(isPrimitive(null)).toBe(true);
	expect(isPrimitive(undefined)).toBe(true);
});

test("return false if `value` is not a primitive value", () => {
	expect(isPrimitive({})).toBe(false);
	expect(isPrimitive([])).toBe(false);
	expect(isPrimitive(() => {})).toBe(false);
	expect(isPrimitive(new Date())).toBe(false);
	expect(isPrimitive(/abc/)).toBe(false);
	expect(isPrimitive(new Error())).toBe(false);
	expect(isPrimitive(new Set())).toBe(false);
	expect(isPrimitive(new Map())).toBe(false);
	expect(isPrimitive(new WeakSet())).toBe(false);
	expect(isPrimitive(new WeakMap())).toBe(false);
	expect(isPrimitive(new Promise(() => {}))).toBe(false);
	expect(isPrimitive(new Int8Array())).toBe(false);
	expect(isPrimitive(new Uint8Array())).toBe(false);
	expect(isPrimitive(new Uint8ClampedArray())).toBe(false);
	expect(isPrimitive(new Int16Array())).toBe(false);
	expect(isPrimitive(new Uint16Array())).toBe(false);
	expect(isPrimitive(new Int32Array())).toBe(false);
	expect(isPrimitive(new Uint32Array())).toBe(false);
	expect(isPrimitive(new Float32Array())).toBe(false);
	expect(isPrimitive(new Float64Array())).toBe(false);
	expect(isPrimitive(new BigInt64Array())).toBe(false);
	expect(isPrimitive(new BigUint64Array())).toBe(false);
	expect(isPrimitive(new Proxy({}, {}))).toBe(false);
	expect(isPrimitive(new ArrayBuffer(1))).toBe(false);
	expect(isPrimitive(new SharedArrayBuffer(1))).toBe(false);
	expect(isPrimitive(new DataView(new ArrayBuffer(1)))).toBe(false);
	expect(isPrimitive(Buffer.from("abc"))).toBe(false);
});
