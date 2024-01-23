import { indexOf } from "@array/index.ts";

test("indexOf returns the index of the first matching element", () => {
	expect(indexOf([1, 2, 3, 4], 3)).toBe(2);
});

test("indexOf returns -1 if no element matches", () => {
	expect(indexOf([1, 2, 3, 4], 5)).toBe(-1);
});

test("indexOf can use a from index", () => {
	expect(indexOf([1, 2, 3, 4], 3, 2)).toBe(2);
});

test("indexOf returns -1 if the from index is greater than or equal to the length of the array", () => {
	expect(indexOf([1, 2, 3, 4], 3, 4)).toBe(-1);
});

test("indexOf returns -1 if the array is empty", () => {
	expect(indexOf([], 1)).toBe(-1);
});

test("indexOf can find NaN", () => {
	expect(indexOf([1, 2, NaN, 4], NaN)).toBe(2);
});
