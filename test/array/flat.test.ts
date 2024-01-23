import { flat } from "@array/index.ts";

test("flattens an array of arrays", () => {
	expect(flat([[2], [3], [4, 5], [6, 7, 8], [9]])).toEqual([
		2, 3, 4, 5, 6, 7, 8, 9,
	]);
});

test("flattens an array of arrays of arrays", () => {
	expect(flat([[[2], [3]], [[4, 5]], [[6, 7, 8]], [[9]]])).toEqual([
		[2],
		[3],
		[4, 5],
		[6, 7, 8],
		[9],
	]);
});

test("flattens an array of arrays with a depth of 2", () => {
	expect(flat([[[2]], [[3]], [[4, 5]], [6, 7, 8], [9]], 2)).toEqual([
		2, 3, 4, 5, 6, 7, 8, 9,
	]);
});

test("flattens an array of arrays with a depth of 1 if depth is negative", () => {
	expect(flat([[[2]], [[3]], [[4, 5]], [6, 7, 8], [9]], -1)).toEqual([
		[2],
		[3],
		[4, 5],
		6,
		7,
		8,
		9,
	]);
});

test("returns an empty array if the input array is empty", () => {
	expect(flat([])).toEqual([]);
});
