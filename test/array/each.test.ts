import { array } from "../../src/index.ts";

test("array.each iterates over elements of an array", () => {
	const arr = [1, 2, 3];
	const result: number[] = [];
	array.each(arr, (value) => {
		result.push(value);
	});
	expect(result).toEqual(arr);
});

test("array.each iterates over elements of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	const result: number[] = [];
	array.each(arrayLike, (value) => {
		result.push(value);
	});
	expect(result).toEqual([1, 2, 3]);
});

test("array.each iterates over elements of an empty array", () => {
	const result: number[] = [];
	array.each([], (value) => {
		result.push(value);
	});
	expect(result).toEqual([]);
});

test("array.each breaks iteration when false is returned", () => {
	const arr = [1, 2, 3];
	const result: number[] = [];
	array.each(arr, (value) => {
		result.push(value);
		return false;
	});
	expect(result).toEqual([1]);
});
