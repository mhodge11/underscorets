import { MAX_INTEGER } from "../../src/config/constants.ts";
import { util } from "../../src/index.ts";

test("util.toFinite converts a number to a finite number", () => {
	expect(util.toFinite(3.2)).toBe(3.2);
	expect(util.toFinite(-Infinity)).toBe(-MAX_INTEGER);
	expect(util.toFinite(Infinity)).toBe(MAX_INTEGER);
	expect(util.toFinite("3.2")).toBe(3.2);
	expect(util.toFinite(NaN)).toBe(0);
	expect(util.toFinite(null)).toBe(0);
	expect(util.toFinite(undefined)).toBe(0);
	expect(util.toFinite(0)).toBe(0);
});
