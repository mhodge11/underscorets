import { MAX_SAFE_INTEGER } from "../../src/config/constants.ts";
import { util } from "../../src/index.ts";

test("util.toSafeInteger converts a number to an integer", () => {
	expect(util.toSafeInteger(3.2)).toBe(3);
	expect(util.toSafeInteger(-3.2)).toBe(-3);
	expect(util.toSafeInteger(-Infinity)).toBe(-MAX_SAFE_INTEGER);
	expect(util.toSafeInteger(Infinity)).toBe(MAX_SAFE_INTEGER);
	expect(util.toSafeInteger("3.2")).toBe(3);
	expect(util.toSafeInteger(NaN)).toBe(0);
	expect(util.toSafeInteger(null)).toBe(0);
	expect(util.toSafeInteger(undefined)).toBe(0);
	expect(util.toSafeInteger(0)).toBe(0);
});
