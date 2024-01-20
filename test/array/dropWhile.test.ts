import { array } from "../../src/index.ts";

const arr = [2, 4, 5, 6];

test("removes elements from the start of the arr until the predicate returns false", () => {
	expect(array.dropWhile(arr, (x) => x % 2 === 0)).toEqual([5, 6]);
});

test("returns an empty arr if the predicate always returns true", () => {
	expect(array.dropWhile(arr, () => true)).toEqual([]);
});

test("returns the original arr if the predicate always returns false", () => {
	expect(array.dropWhile(arr, () => false)).toEqual(arr);
});

test("returns an empty arr if the input arr is empty", () => {
	expect(array.dropWhile([], () => true)).toEqual([]);
});
