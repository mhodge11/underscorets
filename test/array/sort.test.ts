import { array } from "../../src/index.ts";

test("array.sort the array in ascending order based on the iteratee function", () => {
	const numbers = [3, 1, 2];
	const sortedNumbers = array.sort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual([1, 2, 3]);
});

test("array.sort the array in ascending order with no criteria", () => {
	const numbers = [3, 1, 2];
	const sortedNumbers = array.sort(numbers);
	expect(sortedNumbers).toEqual([1, 2, 3]);
});

test("array.sort returns the original array if it is already sorted", () => {
	const numbers = [1, 2, 3];
	const sortedNumbers = array.sort(numbers, { order: "asc" });
	expect(sortedNumbers).toEqual(numbers);
});

test("array.sort returns the original array if it is already sorted with no criteria", () => {
	const numbers = [1, 2, 3];
	const sortedNumbers = array.sort(numbers);
	expect(sortedNumbers).toEqual(numbers);
});

test("array.sort can handle equal values with no criteria", () => {
	const sortedNumbers = array.sort([3, 2, 1, 1, 1]);
	expect(sortedNumbers).toEqual([1, 1, 1, 2, 3]);
});

test("work with arrays of objects", () => {
	const users = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
		{ name: "Eve", age: 35 },
	];
	const sortedUsers = array.sort(users, {
		order: "desc",
		by: (user) => user.age,
	});
	expect(sortedUsers).toEqual([
		{ name: "Eve", age: 35 },
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 25 },
	]);
});

test("array.sort the array in descending order", () => {
	const result = array.sort([1, 1, 1, 2, 3], { order: "desc" });
	expect(result).toEqual([3, 2, 1, 1, 1]);
});

test("array.sort strings in ascending order", () => {
	const result = array.sort(["a", "c", "b"], { order: "asc" });
	expect(result).toEqual(["a", "b", "c"]);
});

test("array.sort strings in ascending order with no criteria", () => {
	const result = array.sort(["a", "c", "b"]);
	expect(result).toEqual(["a", "b", "c"]);
});

test("returns the empty array if the input array is empty", () => {
	const result = array.sort([], { order: "asc" });
	expect(result).toEqual([]);
});

test("returns the array if the input array has only one element", () => {
	const result = array.sort([1], { order: "asc" });
	expect(result).toEqual([1]);
});

test("returns an empty array if the input array is null", () => {
	// @ts-expect-error - Testing invalid input.
	const result = array.sort(null, { order: "asc" });
	expect(result).toEqual([]);
});
