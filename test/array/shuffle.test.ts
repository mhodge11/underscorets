import { array } from "../../src/index.ts";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

test("shuffle the elements of the arr", () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
	const shuffledArray = array.shuffle(arr);
	expect(shuffledArray).not.toEqual(arr);
});

test("not modify the original arr", () => {
	array.shuffle(arr);
	expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
});

test("shuffle returns an empty array if the input array is empty", () => {
	expect(array.shuffle([])).toEqual([]);
});
