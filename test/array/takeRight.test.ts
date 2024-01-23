import { takeRight } from "@array/index.ts";

test("takeRight returns the last n elements of an array", () => {
	const arr = [1, 2, 3];
	expect(takeRight(arr, 2)).toEqual([2, 3]);
});

test("takeRight returns the last n elements of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(takeRight(arrayLike, 2)).toEqual([2, 3]);
});

test("takeRight returns an empty array if the input array is empty", () => {
	expect(takeRight([], 2)).toEqual([]);
});

test("takeRight returns an empty array if n is 0", () => {
	const arr = [1, 2, 3];
	expect(takeRight(arr, 0)).toEqual([]);
});

test("takeRight returns an empty array if n is negative", () => {
	const arr = [1, 2, 3];
	expect(takeRight(arr, -1)).toEqual([]);
});

test("takeRight returns the first element if n is undefined", () => {
	const arr = [1, 2, 3];
	expect(takeRight(arr)).toEqual([3]);
});

test("takeRight returns the full array if n is greater than the length of the array", () => {
	const arr = [1, 2, 3];
	expect(takeRight(arr, 5)).toEqual([1, 2, 3]);
});
