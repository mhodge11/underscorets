import { clamp } from "../../src/index.ts";

test("clamp returns the input when it is within the range", () => {
	expect(clamp(1, 0, 2)).toBe(1);
});

test("clamp returns the minimum when the input is below the range", () => {
	expect(clamp(-1, 0, 2)).toBe(0);
});

test("clamp returns the maximum when the input is above the range", () => {
	expect(clamp(3, 0, 2)).toBe(2);
});

test("clamp returns NaN when the input is NaN", () => {
	expect(clamp(NaN, 0, 2)).toBeNaN();
});

test("clamp sets the minimum to zero if minimum is NaN", () => {
	expect(clamp(-1, NaN, 2)).toBe(0);
	expect(clamp(1, NaN, 2)).toBe(1);
});

test("clamp sets the maximum to zero if maximum is NaN", () => {
	expect(clamp(3, -2, NaN)).toBe(0);
	expect(clamp(-1, -2, NaN)).toBe(-1);
});
