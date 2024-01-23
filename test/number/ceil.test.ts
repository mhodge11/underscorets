import { ceil } from "@number/index.ts";

test("ceil returns the ceiling of a positive num", () => {
	expect(ceil(1.5)).toBe(2);
});

test("ceil returns the ceiling of a negative num", () => {
	expect(ceil(-1.5)).toBe(-1);
});

test("ceil returns the ceiling of zero", () => {
	expect(ceil(0)).toBe(0);
});

test("ceil returns NaN when the input is NaN", () => {
	expect(ceil(NaN)).toBeNaN();
});
