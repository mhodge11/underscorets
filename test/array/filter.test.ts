import { filter } from "../../src/index.ts";

test("filter filters an array", () => {
	expect(filter([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2]);
});

test("filter filters an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(filter(arrayLike, (n) => n < 3)).toEqual([1, 2]);
});

test("filter an empty array returns an empty array", () => {
	expect(filter([], (n) => n < 3)).toEqual([]);
});

test("filter an array with no matching values returns an empty array", () => {
	expect(filter([1, 2, 3], (n) => n > 3)).toEqual([]);
});
