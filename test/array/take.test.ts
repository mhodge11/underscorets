import { array } from "../../src/index.ts";

test("array.take returns the first n elements of an array", () => {
	const arr = [1, 2, 3];
	expect(array.take(arr, 2)).toEqual([1, 2]);
});

test("array.take returns the first n elements of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(array.take(arrayLike, 2)).toEqual([1, 2]);
});

test("array.take returns an empty array if the input array is empty", () => {
	expect(array.take([], 2)).toEqual([]);
});

test("array.take returns an empty array if n is 0", () => {
	const arr = [1, 2, 3];
	expect(array.take(arr, 0)).toEqual([]);
});

test("array.take returns an empty array if n is negative", () => {
	const arr = [1, 2, 3];
	expect(array.take(arr, -1)).toEqual([]);
});
