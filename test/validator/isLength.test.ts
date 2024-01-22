import { isLength } from "../../src/index.ts";

test("return true if `value` is a valid array-like length", () => {
	expect(isLength(0)).toBe(true);
	expect(isLength(3)).toBe(true);
	expect(isLength(9007199254740991)).toBe(true);
});

test("return false if `value` is not a valid array-like length", () => {
	expect(isLength(-1)).toBe(false);
	expect(isLength(9007199254740992)).toBe(false);
	expect(isLength(1.1)).toBe(false);
	expect(isLength(Infinity)).toBe(false);
	expect(isLength(NaN)).toBe(false);
	expect(isLength(-Infinity)).toBe(false);
	expect(isLength(undefined)).toBe(false);
	expect(isLength(null)).toBe(false);
	expect(isLength(true)).toBe(false);
	expect(isLength(Symbol())).toBe(false);
	expect(isLength({})).toBe(false);
	expect(isLength([])).toBe(false);
	expect(isLength(() => {})).toBe(false);
	expect(isLength(async () => {})).toBe(false);
	expect(isLength(/abc/)).toBe(false);
	expect(isLength(new Date())).toBe(false);
	expect(isLength(new Error())).toBe(false);
	expect(isLength(new Map())).toBe(false);
	expect(isLength(new Promise(() => {}))).toBe(false);
	expect(isLength(new Proxy({}, {}))).toBe(false);
	expect(isLength(new Set())).toBe(false);
	expect(isLength(new WeakMap())).toBe(false);
	expect(isLength(new WeakSet())).toBe(false);
	expect(isLength(new WeakRef({}))).toBe(false);
	expect(isLength(new WeakRef(async () => {}))).toBe(false);
	expect(isLength(new WeakRef(() => {}))).toBe(false);
	expect(isLength(new ArrayBuffer(2))).toBe(false);
	expect(isLength(new Boolean(false))).toBe(false);
	expect(isLength(new Boolean(true))).toBe(false);
	expect(isLength(new Number(1))).toBe(false);
	expect(isLength(new String("abc"))).toBe(false);
	expect(isLength(new String(""))).toBe(false);
	expect(isLength(new String(" "))).toBe(false);
});
