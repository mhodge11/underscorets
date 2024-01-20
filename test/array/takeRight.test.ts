import { array } from "../../src/index.ts";

test("array.takeRight returns the last n elements of an array", () => {
	const arr = [1, 2, 3];
	expect(array.takeRight(arr, 2)).toEqual([2, 3]);
});

test("array.takeRight returns the last n elements of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(array.takeRight(arrayLike, 2)).toEqual([2, 3]);
});

test("array.takeRight returns an empty array if the input array is empty", () => {
	expect(array.takeRight([], 2)).toEqual([]);
});

test("array.takeRight returns an empty array if n is 0", () => {
	const arr = [1, 2, 3];
	expect(array.takeRight(arr, 0)).toEqual([]);
});

test("array.takeRight returns an empty array if n is negative", () => {
	const arr = [1, 2, 3];
	expect(array.takeRight(arr, -1)).toEqual([]);
});

test("array.takeRight returns the first element if n is undefined", () => {
	const arr = [1, 2, 3];
	expect(array.takeRight(arr)).toEqual([3]);
});

test("array.takeRight returns the full array if n is greater than the length of the array", () => {
	const arr = [1, 2, 3];
	expect(array.takeRight(arr, 5)).toEqual([1, 2, 3]);
});
