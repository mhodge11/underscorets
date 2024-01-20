import { array } from "../../src/index.ts";

test("array.tail returns all but the first element of an array", () => {
	const arr = [1, 2, 3];
	expect(array.tail(arr)).toEqual([2, 3]);
});

test("array.tail returns all but the first element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(array.tail(arrayLike)).toEqual([2, 3]);
});

test("array.tail returns an empty array if the input array is empty", () => {
	expect(array.tail([])).toEqual([]);
});

test("array.tail returns an empty array if the input array has only one element", () => {
	expect(array.tail([1])).toEqual([]);
});
