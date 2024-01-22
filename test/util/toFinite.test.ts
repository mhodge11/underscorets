import { MAX_INTEGER } from "../../src/config/constants.ts";
import { toFinite } from "../../src/index.ts";

test("toFinite converts a number to a finite number", () => {
	expect(toFinite(3.2)).toBe(3.2);
	expect(toFinite(-Infinity)).toBe(-MAX_INTEGER);
	expect(toFinite(Infinity)).toBe(MAX_INTEGER);
	expect(toFinite("3.2")).toBe(3.2);
	expect(toFinite(NaN)).toBe(0);
	expect(toFinite(null)).toBe(0);
	expect(toFinite(undefined)).toBe(0);
	expect(toFinite(0)).toBe(0);
});
