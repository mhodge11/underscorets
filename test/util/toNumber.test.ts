import { util } from "../../src/index.ts";

test("util.toNumber converts a number to a number", () => {
	expect(util.toNumber(3.2)).toBe(3.2);
	expect(util.toNumber(-3.2)).toBe(-3.2);
	expect(util.toNumber(-Infinity)).toBe(-Infinity);
	expect(util.toNumber(Infinity)).toBe(Infinity);
	expect(util.toNumber("3.2")).toBe(3.2);
	expect(util.toNumber(NaN)).toBe(NaN);
	expect(util.toNumber(null)).toBe(0);
	expect(util.toNumber(undefined)).toBe(NaN);
	expect(util.toNumber(0)).toBe(0);
	expect(util.toNumber(Symbol())).toBe(NaN);
	expect(util.toNumber({})).toBe(NaN);
	expect(util.toNumber(new String("3.2"))).toBe(3.2);
	expect(util.toNumber({ a: 3.2 })).toBe(NaN);
	expect(util.toNumber({ valueOf: () => 3.2 })).toBe(3.2);
	expect(util.toNumber({ valueOf: () => new String("3.2") })).toBe(3.2);
	expect(util.toNumber({ valueOf: () => ({}) })).toBe(NaN);
	expect(util.toNumber({ valueOf: () => "-0x1a2b3c" })).toBe(NaN);
	expect(util.toNumber({ valueOf: () => "-0b101010" })).toBe(NaN);
	expect(util.toNumber({ valueOf: () => "-0o1234567" })).toBe(NaN);
});
