import { array } from "../../src/index.ts";

const arr = [2, 4, 5, 6];

test("drop elements while `predicate` returns truthy", () => {
	expect(array.dropRightWhile(arr, (n) => n > 4)).toEqual([2, 4]);
});

test("returns an empty arr if the predicate always returns true", () => {
	expect(array.dropRightWhile(arr, () => true)).toEqual([]);
});

test("returns the original arr if the predicate always returns false", () => {
	expect(array.dropRightWhile(arr, () => false)).toEqual(arr);
});

test("returns an empty arr if the input arr is empty", () => {
	expect(array.dropRightWhile([], () => true)).toEqual([]);
});
