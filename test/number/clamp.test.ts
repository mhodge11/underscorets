import { num } from "../../src/index.ts";

test("num.clamp returns the input when it is within the range", () => {
	expect(num.clamp(1, 0, 2)).toBe(1);
});

test("num.clamp returns the minimum when the input is below the range", () => {
	expect(num.clamp(-1, 0, 2)).toBe(0);
});

test("num.clamp returns the maximum when the input is above the range", () => {
	expect(num.clamp(3, 0, 2)).toBe(2);
});

test("num.clamp returns NaN when the input is NaN", () => {
	expect(num.clamp(NaN, 0, 2)).toBeNaN();
});

test("num.clamp sets the minimum to zero if minimum is NaN", () => {
	expect(num.clamp(-1, NaN, 2)).toBe(0);
	expect(num.clamp(1, NaN, 2)).toBe(1);
});

test("num.clamp sets the maximum to zero if maximum is NaN", () => {
	expect(num.clamp(3, -2, NaN)).toBe(0);
	expect(num.clamp(-1, -2, NaN)).toBe(-1);
});
