import { MAX_ARRAY_LENGTH } from "../../src/config/constants.ts";
import { util } from "../../src/index.ts";

test("util.toLength converts a number to a length", () => {
	expect(util.toLength(3.2)).toBe(3);
	expect(util.toLength(-3.2)).toBe(0);
	expect(util.toLength(-Infinity)).toBe(0);
	expect(util.toLength(Infinity)).toBe(MAX_ARRAY_LENGTH);
	expect(util.toLength("3.2")).toBe(3);
	expect(util.toLength(NaN)).toBe(0);
	expect(util.toLength(null)).toBe(0);
	expect(util.toLength(undefined)).toBe(0);
	expect(util.toLength(0)).toBe(0);
});
