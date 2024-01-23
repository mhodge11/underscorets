import { toFinite } from "@misc/index.ts";

test("toFinite converts a number to a finite number", () => {
	expect(toFinite(3.2)).toBe(3.2);
	expect(toFinite(-Infinity)).toBe(-Number.MAX_VALUE);
	expect(toFinite(Infinity)).toBe(Number.MAX_VALUE);
	expect(toFinite("3.2")).toBe(3.2);
	expect(toFinite(NaN)).toBe(0);
	expect(toFinite(null)).toBe(0);
	expect(toFinite(undefined)).toBe(0);
	expect(toFinite(0)).toBe(0);
});
