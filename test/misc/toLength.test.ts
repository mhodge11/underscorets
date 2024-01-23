import { MAX_ARRAY_LENGTH } from "@config/constants.ts";
import { toLength } from "@misc/index.ts";

test("toLength converts a number to a length", () => {
	expect(toLength(3.2)).toBe(3);
	expect(toLength(-3.2)).toBe(0);
	expect(toLength(-Infinity)).toBe(0);
	expect(toLength(Infinity)).toBe(MAX_ARRAY_LENGTH);
	expect(toLength("3.2")).toBe(3);
	expect(toLength(NaN)).toBe(0);
	expect(toLength(null)).toBe(0);
	expect(toLength(undefined)).toBe(0);
	expect(toLength(0)).toBe(0);
});
