import { chunk } from "../../src/index.ts";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test("chunk an arr", () => {
	expect(chunk(arr, 2)).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test("return the last chunk as remaining elements", () => {
	expect(chunk(arr, 3)).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]);
});

test("coerce `size` to an integer", () => {
	expect(chunk(arr, arr.length / 4)).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});

test("empty arr on negative size", () => {
	expect(chunk(arr, -1)).toEqual([]);
});

test("empty arr", () => {
	expect(chunk([], 2)).toEqual([]);
});
