import { average } from "@number/index.ts";

test("return NaN when the input array is empty", () => {
	expect(average([])).toBeNaN();
});

test("return the average of an array of numbers", () => {
	expect(average([1, 2, 3, 4, 5])).toBe(3);
});

test("return the average of a single num", () => {
	expect(average([5])).toBe(5);
});

test("return the average of a negative num", () => {
	expect(average([-2])).toBe(-2);
});

test("return the average of a decimal num", () => {
	expect(average([3.14])).toBeCloseTo(3.14);
});

test("return the average of multiple decimal numbers", () => {
	expect(average([1.2, 3.4, 5.6])).toBeCloseTo(3.4);
});
