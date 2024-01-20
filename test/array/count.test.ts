import { array } from "../../src/index.ts";

test("countBy", () => {
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const even = (value: number) => (value % 2 === 0).toString();
	const result = array.count(arr, even);
	expect(result).toEqual({ true: 5, false: 5 });
});

test("countBy with object", () => {
	const arr = [
		{ user: "barney", category: 1 },
		{ user: "thilo", category: 2 },
		{ user: "max", category: 2 },
		{ user: "lena", category: 3 },
	];
	const result = array.count(arr, (value) => value.category);
	expect(result).toEqual({ "1": 1, "2": 2, "3": 1 });
});

test("countBy with array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	const result = array.count(arrayLike, (value) => `${value % 2 === 0}`);
	expect(result).toEqual({ true: 1, false: 2 });
});

test("returns empty object if array is empty", () => {
	const result = array.count([], (value) => value);
	expect(result).toEqual({});
});
