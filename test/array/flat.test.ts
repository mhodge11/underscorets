import { array } from "../../src/index.ts";

test("flattens an array of arrays", () => {
	expect(array.flat([[2], [3], [4, 5], [6, 7, 8], [9]])).toEqual([
		2, 3, 4, 5, 6, 7, 8, 9,
	]);
});

test("flattens an array of arrays of arrays", () => {
	expect(array.flat([[[2], [3]], [[4, 5]], [[6, 7, 8]], [[9]]])).toEqual([
		[2],
		[3],
		[4, 5],
		[6, 7, 8],
		[9],
	]);
});

test("flattens an array of arrays with a depth of 2", () => {
	expect(array.flat([[[2]], [[3]], [[4, 5]], [6, 7, 8], [9]], 2)).toEqual([
		2, 3, 4, 5, 6, 7, 8, 9,
	]);
});

test("flattens an array of arrays with a depth of 1 if depth is negative", () => {
	expect(array.flat([[[2]], [[3]], [[4, 5]], [6, 7, 8], [9]], -1)).toEqual([
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
	expect(array.flat([])).toEqual([]);
});
