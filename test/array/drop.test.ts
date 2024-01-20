import { array } from "../../src/index.ts";

test("removes 1 element from the start of the array", () => {
	const arr = [2, 4, 5, 6];
	expect(array.drop(arr, 1)).toEqual([4, 5, 6]);
});

test("removes all elements if n is greater than the length of the array", () => {
	const arr = [2, 4, 5, 6];
	expect(array.drop(arr, 5)).toEqual([]);
});

test("returns the original arr if n is 0", () => {
	const arr = [2, 4, 5, 6];
	expect(array.drop(arr, 0)).toEqual(arr);
});

test("returns an empty arr if the input arr is empty", () => {
	expect(array.drop([])).toEqual([]);
});

test("returns the original array if n is negative", () => {
	const arr = [2, 4, 5, 6];
	expect(array.drop(arr, -1)).toEqual(arr);
});

test("coerces a non-integer n to an integer", () => {
	const arr = [2, 4, 5, 6];
	expect(array.drop(arr, 2.2)).toEqual([5, 6]);
});
