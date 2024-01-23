import { MAX_SAFE_INTEGER } from "@config/constants.ts";
import { toSafeInteger } from "@misc/index.ts";

test("toSafeInteger converts a number to an integer", () => {
	expect(toSafeInteger(3.2)).toBe(3);
	expect(toSafeInteger(-3.2)).toBe(-3);
	expect(toSafeInteger(-Infinity)).toBe(-MAX_SAFE_INTEGER);
	expect(toSafeInteger(Infinity)).toBe(MAX_SAFE_INTEGER);
	expect(toSafeInteger("3.2")).toBe(3);
	expect(toSafeInteger(NaN)).toBe(0);
	expect(toSafeInteger(null)).toBe(0);
	expect(toSafeInteger(undefined)).toBe(0);
	expect(toSafeInteger(0)).toBe(0);
});
