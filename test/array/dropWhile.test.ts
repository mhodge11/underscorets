import { dropWhile } from "../../src/index.ts";

const arr = [2, 4, 5, 6];

test("removes elements from the start of the arr until the predicate returns false", () => {
	expect(dropWhile(arr, (x) => x % 2 === 0)).toEqual([5, 6]);
});

test("returns an empty arr if the predicate always returns true", () => {
	expect(dropWhile(arr, () => true)).toEqual([]);
});

test("returns the original arr if the predicate always returns false", () => {
	expect(dropWhile(arr, () => false)).toEqual(arr);
});

test("returns an empty arr if the input arr is empty", () => {
	expect(dropWhile([], () => true)).toEqual([]);
});
