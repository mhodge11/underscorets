import { toNumber } from "../../src/index.ts";

test("toNumber converts a number to a number", () => {
	expect(toNumber(3.2)).toBe(3.2);
	expect(toNumber(-3.2)).toBe(-3.2);
	expect(toNumber(-Infinity)).toBe(-Infinity);
	expect(toNumber(Infinity)).toBe(Infinity);
	expect(toNumber("3.2")).toBe(3.2);
	expect(toNumber(NaN)).toBe(NaN);
	expect(toNumber(null)).toBe(0);
	expect(toNumber(undefined)).toBe(NaN);
	expect(toNumber(0)).toBe(0);
	expect(toNumber(Symbol())).toBe(NaN);
	expect(toNumber({})).toBe(NaN);
	expect(toNumber(new String("3.2"))).toBe(3.2);
	expect(toNumber({ a: 3.2 })).toBe(NaN);
	expect(toNumber({ valueOf: () => 3.2 })).toBe(3.2);
	expect(toNumber({ valueOf: () => new String("3.2") })).toBe(3.2);
	expect(toNumber({ valueOf: () => ({}) })).toBe(NaN);
	expect(toNumber({ valueOf: () => "-0x1a2b3c" })).toBe(NaN);
	expect(toNumber({ valueOf: () => "-0b101010" })).toBe(NaN);
	expect(toNumber({ valueOf: () => "-0o1234567" })).toBe(NaN);
});
