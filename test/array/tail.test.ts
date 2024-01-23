import { tail } from "@array/index.ts";

test("tail returns all but the first element of an array", () => {
	const arr = [1, 2, 3];
	expect(tail(arr)).toEqual([2, 3]);
});

test("tail returns all but the first element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(tail(arrayLike)).toEqual([2, 3]);
});

test("tail returns an empty array if the input array is empty", () => {
	expect(tail([])).toEqual([]);
});

test("tail returns an empty array if the input array has only one element", () => {
	expect(tail([1])).toEqual([]);
});
