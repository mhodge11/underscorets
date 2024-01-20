import { MAX_INTEGER } from "../../src/config/constants.ts";
import { util } from "../../src/index.ts";

test("util.toInteger converts a number to an integer", () => {
	expect(util.toInteger(3.2)).toBe(3);
	expect(util.toInteger(-3.2)).toBe(-3);
	expect(util.toInteger(-Infinity)).toBe(-MAX_INTEGER);
	expect(util.toInteger(Infinity)).toBe(MAX_INTEGER);
	expect(util.toInteger("3.2")).toBe(3);
	expect(util.toInteger(NaN)).toBe(0);
	expect(util.toInteger(null)).toBe(0);
	expect(util.toInteger(undefined)).toBe(0);
	expect(util.toInteger(0)).toBe(0);
});
