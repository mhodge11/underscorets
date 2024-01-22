import { insertionSort } from "../../src/index.ts";

test("insertion sort the array in ascending order based on the iteratee function", () => {
	const numbers = [3, 1, 2];
	const sortedNumbers = insertionSort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual([1, 2, 3]);
});

test("insertion sort returns the original array if it is already sorted", () => {
	const numbers = [1, 2, 3];
	const sortedNumbers = insertionSort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual(numbers);
});

test("work with arrays of objects", () => {
	const users = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
		{ name: "Eve", age: 35 },
	];
	const sortedUsers = insertionSort(users, {
		order: "desc",
		by: (user) => user.age,
	});
	expect(sortedUsers).toEqual([
		{ name: "Eve", age: 35 },
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
	]);
});

test("insertion sort the array in descending order", () => {
	const result = insertionSort([1, 1, 1, 2, 3], { order: "desc" });
	expect(result).toEqual([3, 2, 1, 1, 1]);
});

test("insertion sort strings in ascending order", () => {
	const result = insertionSort(["a", "c", "b"], { order: "asc" });
	expect(result).toEqual(["a", "b", "c"]);
});

test("returns the empty array if the input array is empty", () => {
	const result = insertionSort([], { order: "asc" });
	expect(result).toEqual([]);
});

test("returns the array if the input array has only one element", () => {
	const result = insertionSort([1], { order: "asc" });
	expect(result).toEqual([1]);
});

test("returns an empty array if the input array is null", () => {
	// @ts-expect-error - Testing invalid input.
	const result = insertionSort(null, { order: "asc" });
	expect(result).toEqual([]);
});
