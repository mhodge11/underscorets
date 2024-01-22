import { dropRight } from "../../src/index.ts";

test("removes 1 element from the start of the array", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr, 1)).toEqual([2, 4, 5]);
});

test("removes all elements if n is greater than the length of the array", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr, 5)).toEqual([]);
});

test("returns the original arr if n is 0", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr, 0)).toEqual(arr);
});

test("n defaults to 1 if not specified", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr)).toEqual([2, 4, 5]);
});

test("returns an empty arr if the input arr is empty", () => {
	expect(dropRight([])).toEqual([]);
});

test("returns the original array if n is negative", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr, -1)).toEqual(arr);
});

test("coerces a non-integer n to an integer", () => {
	const arr = [2, 4, 5, 6];
	expect(dropRight(arr, 2.2)).toEqual([2, 4]);
});
