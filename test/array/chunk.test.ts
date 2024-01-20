import { array } from "../../src/index.ts";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("array.chunk an arr", () => {
	expect(array.chunk(arr, 2)).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test("return the last array.chunk as remaining elements", () => {
	expect(array.chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
});

test("coerce `size` to an integer", () => {
	expect(array.chunk(arr, arr.length / 4)).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test("empty arr on negative size", () => {
	expect(array.chunk(arr, -1)).toEqual([]);
});

test("empty arr", () => {
	expect(array.chunk([], 2)).toEqual([]);
});
