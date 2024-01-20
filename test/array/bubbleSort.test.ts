import { array } from "../../src/index.ts";

test("bubble sort the array in ascending order based on the iteratee function", () => {
	const numbers = [3, 1, 2];
	const sortedNumbers = array.bubbleSort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual([1, 2, 3]);
});

test("bubble sort returns the original array if it is already sorted", () => {
	const numbers = [1, 2, 3];
	const sortedNumbers = array.bubbleSort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual(numbers);
});

test("bubble sorts an array like", () => {
	const arrayLike = { 0: 3, 1: 1, 2: 2, length: 3 };
	const sortedArrayLike = array.bubbleSort(arrayLike, { order: "asc" });
	expect(sortedArrayLike).toEqual([1, 2, 3]);
});

test("work with arrays of objects", () => {
	const users = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
		{ name: "Eve", age: 35 },
	];
	const sortedUsers = array.bubbleSort(users, {
		order: "desc",
		by: (user) => user.age,
	});
	expect(sortedUsers).toEqual([
		{ name: "Eve", age: 35 },
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
	]);
});

test("bubble sort the array in descending order", () => {
	const result = array.bubbleSort([1, 1, 1, 2, 3], { order: "desc" });
	expect(result).toEqual([3, 2, 1, 1, 1]);
});

test("bubble sort strings in ascending order", () => {
	const result = array.bubbleSort(["a", "c", "b"], { order: "asc" });
	expect(result).toEqual(["a", "b", "c"]);
});

test("returns the empty array if the input array is empty", () => {
	const result = array.bubbleSort([], { order: "asc" });
	expect(result).toEqual([]);
});

test("returns the array if the input array has only one element", () => {
	const result = array.bubbleSort([1], { order: "asc" });
	expect(result).toEqual([1]);
});

test("returns an empty array if the input array is null", () => {
	// @ts-expect-error - Testing invalid input.
	const result = array.bubbleSort(null, { order: "asc" });
	expect(result).toEqual([]);
});
