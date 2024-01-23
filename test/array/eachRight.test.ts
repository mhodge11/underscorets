import { eachRight } from "@array/index.ts";

test("eachRight iterates over elements of an array", () => {
	const arr = [1, 2, 3];
	const result: number[] = [];
	eachRight(arr, (value) => {
		result.push(value);
	});
	expect(result).toEqual(arr.reverse());
});

test("eachRight iterates over elements of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	const result: number[] = [];
	eachRight(arrayLike, (value) => {
		result.push(value);
	});
	expect(result).toEqual([3, 2, 1]);
});

test("eachRight iterates over elements of an empty array", () => {
	const result: number[] = [];
	eachRight([], (value) => {
		result.push(value);
	});
	expect(result).toEqual([]);
});

test("eachRight breaks iteration when false is returned", () => {
	const arr = [1, 2, 3];
	const result: number[] = [];
	eachRight(arr, (value) => {
		result.push(value);
		return false;
	});
	expect(result).toEqual([3]);
});
