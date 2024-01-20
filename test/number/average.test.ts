import { num } from "../../src/index.ts";

test("return NaN when the input array is empty", () => {
	expect(num.average([])).toBeNaN();
});

test("return the num.average of an array of numbers", () => {
	expect(num.average([1, 2, 3, 4, 5])).toBe(3);
});

test("return the num.average of a single num", () => {
	expect(num.average([5])).toBe(5);
});

test("return the num.average of a negative num", () => {
	expect(num.average([-2])).toBe(-2);
});

test("return the num.average of a decimal num", () => {
	expect(num.average([3.14])).toBeCloseTo(3.14);
});

test("return the num.average of multiple decimal numbers", () => {
	expect(num.average([1.2, 3.4, 5.6])).toBeCloseTo(3.4);
});
