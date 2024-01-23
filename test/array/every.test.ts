import { every } from "@array/index.ts";

test("every returns true if all elements pass the predicate check", () => {
	expect(every([1, 2, 3, 4], (n) => n < 5)).toBe(true);
});

test("every returns false if any element fails the predicate check", () => {
	expect(every([1, 2, 3, 4], (n) => n < 4)).toBe(false);
});

test("every returns true for an empty array", () => {
	expect(every([], () => true)).toBe(true);
});

test("every returns true if the predicate always returns true", () => {
	expect(every([1, 2, 3, 4], () => true)).toBe(true);
});

test("every returns false if the predicate always returns false", () => {
	expect(every([1, 2, 3, 4], () => false)).toBe(false);
});
