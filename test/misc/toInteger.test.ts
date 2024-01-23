import { MAX_INTEGER } from "@config/constants.ts";
import { toInteger } from "@misc/index.ts";

test("toInteger converts a number to an integer", () => {
	expect(toInteger(3.2)).toBe(3);
	expect(toInteger(-3.2)).toBe(-3);
	expect(toInteger(-Infinity)).toBe(-MAX_INTEGER);
	expect(toInteger(Infinity)).toBe(MAX_INTEGER);
	expect(toInteger("3.2")).toBe(3);
	expect(toInteger(NaN)).toBe(0);
	expect(toInteger(null)).toBe(0);
	expect(toInteger(undefined)).toBe(0);
	expect(toInteger(0)).toBe(0);
});
