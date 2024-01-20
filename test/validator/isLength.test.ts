import { validator } from "../../src/index.ts";

test("return true if `value` is a valid array-like length", () => {
	expect(validator.isLength(0)).toBe(true);
	expect(validator.isLength(3)).toBe(true);
	expect(validator.isLength(9007199254740991)).toBe(true);
});

test("return false if `value` is not a valid array-like length", () => {
	expect(validator.isLength(-1)).toBe(false);
	expect(validator.isLength(9007199254740992)).toBe(false);
	expect(validator.isLength(1.1)).toBe(false);
	expect(validator.isLength(Infinity)).toBe(false);
	expect(validator.isLength(NaN)).toBe(false);
	expect(validator.isLength(-Infinity)).toBe(false);
	expect(validator.isLength(undefined)).toBe(false);
	expect(validator.isLength(null)).toBe(false);
	expect(validator.isLength(true)).toBe(false);
	expect(validator.isLength(Symbol())).toBe(false);
	expect(validator.isLength({})).toBe(false);
	expect(validator.isLength([])).toBe(false);
	expect(validator.isLength(() => {})).toBe(false);
	expect(validator.isLength(async () => {})).toBe(false);
	expect(validator.isLength(/abc/)).toBe(false);
	expect(validator.isLength(new Date())).toBe(false);
	expect(validator.isLength(new Error())).toBe(false);
	expect(validator.isLength(new Map())).toBe(false);
	expect(validator.isLength(new Promise(() => {}))).toBe(false);
	expect(validator.isLength(new Proxy({}, {}))).toBe(false);
	expect(validator.isLength(new Set())).toBe(false);
	expect(validator.isLength(new WeakMap())).toBe(false);
	expect(validator.isLength(new WeakSet())).toBe(false);
	expect(validator.isLength(new WeakRef({}))).toBe(false);
	expect(validator.isLength(new WeakRef(async () => {}))).toBe(false);
	expect(validator.isLength(new WeakRef(() => {}))).toBe(false);
	expect(validator.isLength(new ArrayBuffer(2))).toBe(false);
	expect(validator.isLength(new Boolean(false))).toBe(false);
	expect(validator.isLength(new Boolean(true))).toBe(false);
	expect(validator.isLength(new Number(1))).toBe(false);
	expect(validator.isLength(new String("abc"))).toBe(false);
	expect(validator.isLength(new String(""))).toBe(false);
	expect(validator.isLength(new String(" "))).toBe(false);
});
