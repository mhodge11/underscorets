import { floor } from "@number/index.ts";

test("floor returns the floor of a positive num", () => {
	expect(floor(1.5)).toBe(1);
});

test("floor returns the floor of a negative num", () => {
	expect(floor(-1.5)).toBe(-2);
});

test("floor returns the floor of zero", () => {
	expect(floor(0)).toBe(0);
});

test("floor returns NaN when the input is NaN", () => {
	expect(floor(NaN)).toBeNaN();
});
