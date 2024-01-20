import { num } from "../../src/index.ts";

test("num.ceil returns the ceiling of a positive num", () => {
	expect(num.ceil(1.5)).toBe(2);
});

test("num.ceil returns the ceiling of a negative num", () => {
	expect(num.ceil(-1.5)).toBe(-1);
});

test("num.ceil returns the ceiling of zero", () => {
	expect(num.ceil(0)).toBe(0);
});

test("num.ceil returns NaN when the input is NaN", () => {
	expect(num.ceil(NaN)).toBeNaN();
});
