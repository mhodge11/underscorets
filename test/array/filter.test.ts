import { array } from "../../src/index.ts";

test("array.filter filters an array", () => {
	expect(array.filter([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2]);
});

test("array.filter filters an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.filter(arrayLike, (n) => n < 3)).toEqual([1, 2]);
});

test("array.filter an empty array returns an empty array", () => {
	expect(array.filter([], (n) => n < 3)).toEqual([]);
});

test("array.filter an array with no matching values returns an empty array", () => {
	expect(array.filter([1, 2, 3], (n) => n > 3)).toEqual([]);
});
