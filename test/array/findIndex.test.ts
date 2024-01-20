import { array } from "../../src/index.ts";

test("array.findIndex returns the index of the first element that passes the predicate check", () => {
	expect(array.findIndex([1, 2, 3, 4], (n) => n > 2)).toBe(2);
});

test("array.findIndex returns -1 if no elements pass the predicate check", () => {
	expect(array.findIndex([1, 2, 3, 4], (n) => n > 4)).toBe(-1);
});

test("array.findIndex returns -1 for an empty array", () => {
	expect(array.findIndex([], () => true)).toBe(-1);
});

test("array.findIndex returns the index of the first element that passes the predicate check in an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.findIndex(arrayLike, (n) => n > 2)).toBe(2);
});

test("array.findIndex starts at the specified index", () => {
	expect(array.findIndex([1, 2, 3, 4], (n) => n > 1, 2)).toBe(2);
});

test("array.findIndex starts at the specified index and goes from the end of the array", () => {
	expect(array.findIndex([1, 2, 3, 4], (n) => n > 1, 3, true)).toBe(3);
});
