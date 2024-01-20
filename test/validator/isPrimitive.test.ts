import { validator } from "../../src/index.ts";

test("return true if `value` is a primitive value", () => {
	expect(validator.isPrimitive(1)).toBe(true);
	expect(validator.isPrimitive("abc")).toBe(true);
	expect(validator.isPrimitive(true)).toBe(true);
	expect(validator.isPrimitive(false)).toBe(true);
	expect(validator.isPrimitive(null)).toBe(true);
	expect(validator.isPrimitive(undefined)).toBe(true);
});

test("return false if `value` is not a primitive value", () => {
	expect(validator.isPrimitive({})).toBe(false);
	expect(validator.isPrimitive([])).toBe(false);
	expect(validator.isPrimitive(() => {})).toBe(false);
	expect(validator.isPrimitive(new Date())).toBe(false);
	expect(validator.isPrimitive(/abc/)).toBe(false);
	expect(validator.isPrimitive(new Error())).toBe(false);
	expect(validator.isPrimitive(new Set())).toBe(false);
	expect(validator.isPrimitive(new Map())).toBe(false);
	expect(validator.isPrimitive(new WeakSet())).toBe(false);
	expect(validator.isPrimitive(new WeakMap())).toBe(false);
	expect(validator.isPrimitive(new Promise(() => {}))).toBe(false);
	expect(validator.isPrimitive(new Int8Array())).toBe(false);
	expect(validator.isPrimitive(new Uint8Array())).toBe(false);
	expect(validator.isPrimitive(new Uint8ClampedArray())).toBe(false);
	expect(validator.isPrimitive(new Int16Array())).toBe(false);
	expect(validator.isPrimitive(new Uint16Array())).toBe(false);
	expect(validator.isPrimitive(new Int32Array())).toBe(false);
	expect(validator.isPrimitive(new Uint32Array())).toBe(false);
	expect(validator.isPrimitive(new Float32Array())).toBe(false);
	expect(validator.isPrimitive(new Float64Array())).toBe(false);
	expect(validator.isPrimitive(new BigInt64Array())).toBe(false);
	expect(validator.isPrimitive(new BigUint64Array())).toBe(false);
	expect(validator.isPrimitive(new Proxy({}, {}))).toBe(false);
	expect(validator.isPrimitive(new ArrayBuffer(1))).toBe(false);
	expect(validator.isPrimitive(new SharedArrayBuffer(1))).toBe(false);
	expect(validator.isPrimitive(new DataView(new ArrayBuffer(1)))).toBe(false);
	expect(validator.isPrimitive(Buffer.from("abc"))).toBe(false);
});
