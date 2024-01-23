import { some } from "@array/index.ts";

test("some returns true if at least one element passes the predicate check", () => {
	expect(some([1, 2, 3, 4], (n) => n % 2 === 0)).toBe(true);
});

test("some returns false if no elements pass the predicate check", () => {
	expect(some([1, 3, 5, 7], (n) => n % 2 === 0)).toBe(false);
});

test("some returns false if the input array is empty", () => {
	expect(some([], () => true)).toBe(false);
});

test("some returns false if the predicate always returns false", () => {
	expect(some([1, 2, 3, 4], () => false)).toBe(false);
});

test("some returns true if the predicate always returns true", () => {
	expect(some([1, 2, 3, 4], () => true)).toBe(true);
});
