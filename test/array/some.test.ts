import { array } from "../../src/index.ts";

test("array.some returns true if at least one element passes the predicate check", () => {
	expect(array.some([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(true);
});

test("array.some returns false if no elements pass the predicate check", () => {
	expect(array.some([1, 3, 5, 7], (n) => n % 2 === 0)).toBe(false);
});

test("array.some returns false if the input array is empty", () => {
	expect(array.some([], () => true)).toBe(false);
});

test("array.some returns false if the predicate always returns false", () => {
	expect(array.some([1, 2, 3, 4], () => false)).toBe(false);
});

test("array.some returns true if the predicate always returns true", () => {
	expect(array.some([1, 2, 3, 4], () => true)).toBe(true);
});
