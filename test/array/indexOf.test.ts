import { array } from "../../src/index.ts";

test("array.indexOf returns the index of the first matching element", () => {
	expect(array.indexOf([1, 2, 3, 4], 3)).toBe(2);
});

test("array.indexOf returns -1 if no element matches", () => {
	expect(array.indexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test("array.indexOf can use a from index", () => {
	expect(array.indexOf([1, 2, 3, 4], 3, 2)).toBe(2);
});

test("array.indexOf returns -1 if the from index is greater than or equal to the length of the array", () => {
	expect(array.indexOf([1, 2, 3, 4], 3, 4)).toBe(-1);
});

test("array.indexOf returns -1 if the array is empty", () => {
	expect(array.indexOf([], 1)).toBe(-1);
});

test("array.indexOf can find NaN", () => {
	expect(array.indexOf([1, 2, NaN, 4], NaN)).toBe(2);
});
