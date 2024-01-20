import { array } from "../../src/index.ts";

test("array.map maps an array", () => {
	expect(array.map([1, 2, 3, 4], (n) => n * 2)).toEqual([2, 4, 6, 8]);
});

test("array.map maps an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.map(arrayLike, (n) => n * 2)).toEqual([2, 4, 6, 8]);
});

test("array.map an empty array returns an empty array", () => {
	expect(array.map([], (n) => n * 2)).toEqual([]);
});
