import { num } from "../../src/index.ts";

test("num.floor returns the floor of a positive num", () => {
	expect(num.floor(1.5)).toBe(1);
});

test("num.floor returns the floor of a negative num", () => {
	expect(num.floor(-1.5)).toBe(-2);
});

test("num.floor returns the floor of zero", () => {
	expect(num.floor(0)).toBe(0);
});

test("num.floor returns NaN when the input is NaN", () => {
	expect(num.floor(NaN)).toBeNaN();
});
