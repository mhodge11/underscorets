import { array } from "../../src/index.ts";

test("array.findLastIndex returns the index of the last element that passes the predicate check", () => {
	expect(array.findLastIndex([1, 2, 3, 4], (n) => n < 3)).toBe(1);
});

test("array.findLastIndex returns -1 if no elements pass the predicate check", () => {
	expect(array.findLastIndex([1, 2, 3, 4], (n) => n > 4)).toBe(-1);
});

test("array.findLastIndex returns -1 for an empty array", () => {
	expect(array.findLastIndex([], () => true)).toBe(-1);
});

test("array.findLastIndex returns the index of the last element that passes the predicate check in an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.findLastIndex(arrayLike, (n) => n < 3)).toBe(1);
});

test("array.findLastIndex starts at the specified index", () => {
	expect(array.findLastIndex([1, 2, 3, 4], (n) => n < 4, 1)).toBe(1);
});

test("array.findLastIndex starts at the specified negative index", () => {
	expect(array.findLastIndex([1, 2, 3, 4], (n) => n < 4, -2)).toBe(2);
});
