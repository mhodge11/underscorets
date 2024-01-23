import { group } from "@array/index.ts";

test("groups elements by evenness", () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const even = (value: number) => (value % 2 === 0).toString();
	const result = group(arr, even);
	expect(result).toEqual({ true: [2, 4, 6, 8, 10], false: [1, 3, 5, 7, 9] });
});

test("group an arr by a property", () => {
	const arr = [
		{ name: "Alice", age: 30 },
		{ name: "Bob", age: 35 },
		{ name: "Charlie", age: 30 },
		{ name: "Dave", age: 40 },
		{ name: "Eve", age: 35 },
	];

	const result = group(arr, (element) => element.age);

	expect(result).toEqual({
		30: [
			{ name: "Alice", age: 30 },
			{ name: "Charlie", age: 30 },
		],
		35: [
			{ name: "Bob", age: 35 },
			{ name: "Eve", age: 35 },
		],
		40: [{ name: "Dave", age: 40 }],
	});
});

test("group returns an empty object if the array is empty", () => {
	const result = group([], (value) => value);
	expect(result).toEqual({});
});
