import { head } from "@array/index.ts";

test("head returns the first element of an array", () => {
	expect(head([1, 2, 3, 4])).toBe(1);
});

test("head returns undefined for an empty array", () => {
	expect(head([])).toBe(undefined);
});

test("head returns the first element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(head(arrayLike)).toBe(1);
});
