import { median } from "../../src/index.ts";

test("return the median of an odd length array", () => {
	expect(median([1, 2, 3, 4, 5])).toBe(3);
});

test("return the median of an even length array", () => {
	expect(median([1, 2, 3, 4, 5, 6])).toBe(3.5);
});

test("return the median of a single element array", () => {
	expect(median([1])).toBe(1);
});

test("return the median of a negative num array", () => {
	expect(median([-2, -4, -6])).toBe(-4);
});

test("return the median of a float num array", () => {
	expect(median([2.5, 3.5, 4.5])).toBe(3.5);
});

test("throw an error when input is empty array", () => {
	expect(median([])).toBe(NaN);
});
