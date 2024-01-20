import { num } from "../../src/index.ts";

test("return the num.median of an odd length array", () => {
	expect(num.median([1, 2, 3, 4, 5])).toBe(3);
});

test("return the num.median of an even length array", () => {
	expect(num.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
});

test("return the num.median of a single element array", () => {
	expect(num.median([1])).toBe(1);
});

test("return the num.median of a negative num array", () => {
	expect(num.median([-2, -4, -6])).toBe(-4);
});

test("return the num.median of a float num array", () => {
	expect(num.median([2.5, 3.5, 4.5])).toBe(3.5);
});

test("throw an error when input is empty array", () => {
	expect(num.median([])).toBe(NaN);
});
