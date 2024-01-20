import { array } from "../../src/index.ts";

test("array.lastIndexOf returns the index of the last element", () => {
	expect(array.lastIndexOf([1, 2, 3, 4], 3)).toBe(2);
});

test("array.lastIndexOf returns -1 if no element matches", () => {
	expect(array.lastIndexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test("array.lastIndexOf can use a from index", () => {
	expect(array.lastIndexOf([1, 2, 3, 4], 3, 2)).toBe(2);
});

test("array.lastIndexOf still finds the index if the from index is greater than or equal to the length of the array", () => {
	expect(array.lastIndexOf([1, 2, 3, 4], 3, 4)).toBe(2);
});

test("array.lastIndexOf can use a negative from index", () => {
	expect(array.lastIndexOf([1, 2, 3, 4], 3, -1)).toBe(2);
});

test("array.lastIndexOf returns -1 if the array is empty", () => {
	expect(array.lastIndexOf([], 1)).toBe(-1);
});

test("array.lastIndexOf can find NaN", () => {
	expect(array.lastIndexOf([1, 2, NaN, 4], NaN)).toBe(2);
});
