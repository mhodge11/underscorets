import { lastIndexOf } from "../../src/index.ts";

test("lastIndexOf returns the index of the last element", () => {
	expect(lastIndexOf([1, 2, 3, 4], 3)).toBe(2);
});

test("lastIndexOf returns -1 if no element matches", () => {
	expect(lastIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test("lastIndexOf can use a from index", () => {
	expect(lastIndexOf([1, 2, 3, 4], 3, 2)).toBe(2);
});

test("lastIndexOf still finds the index if the from index is greater than or equal to the length of the array", () => {
	expect(lastIndexOf([1, 2, 3, 4], 3, 4)).toBe(2);
});

test("lastIndexOf can use a negative from index", () => {
	expect(lastIndexOf([1, 2, 3, 4], 3, -1)).toBe(2);
});

test("lastIndexOf returns -1 if the array is empty", () => {
	expect(lastIndexOf([], 1)).toBe(-1);
});

test("lastIndexOf can find NaN", () => {
	expect(lastIndexOf([1, 2, NaN, 4], NaN)).toBe(2);
});
