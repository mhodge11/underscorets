import { slice } from "@array/index.ts";

test("slice returns a slice of an array", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 1, 3)).toEqual([2, 3]);
});

test("slice returns a slice of an array with a negative start", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, -3, 6)).toEqual([4, 5, 6]);
});

test("slice returns a slice of an array with a negative end", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 2, -2)).toEqual([3, 4]);
});

test("slice returns a slice of an array with negative start and end", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, -4, -2)).toEqual([3, 4]);
});

test("slice returns a slice of an array with a start greater than the end", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 5, 2)).toEqual([]);
});

test("slice returns a slice of an array with a start greater than the end and negative end", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 5, -2)).toEqual([]);
});

test("slice returns an empty array if the input array is empty", () => {
	expect(slice([], 0, 0)).toEqual([]);
});

test("slice returns to the end of the array if the end is not specified", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 2)).toEqual([3, 4, 5, 6]);
});

test("slice returns to the end of the array if the end is greater than the array length", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, 2, 10)).toEqual([3, 4, 5, 6]);
});

test("slice sets the start at zero if it is negative and greater than the array length", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	expect(slice(arr, -10, 2)).toEqual([1, 2]);
});

test("slice sets the start at zero if it is undefined", () => {
	const arr = [1, 2, 3, 4, 5, 6];
	// @ts-expect-error - Testing undefined
	expect(slice(arr)).toEqual([1, 2, 3, 4, 5, 6]);
});
