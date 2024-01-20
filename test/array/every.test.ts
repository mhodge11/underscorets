import { array } from "../../src/index.ts";

test("array.every returns true if all elements pass the predicate check", () => {
	expect(array.every([1, 2, 3, 4], (n) => n < 5)).toBe(true);
});

test("array.every returns false if any element fails the predicate check", () => {
	expect(array.every([1, 2, 3, 4], (n) => n < 4)).toBe(false);
});

test("array.every returns true for an empty array", () => {
	expect(array.every([], () => true)).toBe(true);
});

test("array.every returns true if the predicate always returns true", () => {
	expect(array.every([1, 2, 3, 4], () => true)).toBe(true);
});

test("array.every returns false if the predicate always returns false", () => {
	expect(array.every([1, 2, 3, 4], () => false)).toBe(false);
});
