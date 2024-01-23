import { last } from "@array/index.ts";

test("last returns the last element of an array", () => {
	expect(last([1, 2, 3, 4])).toBe(4);
});

test("last returns undefined for an empty array", () => {
	expect(last([])).toBe(undefined);
});

test("last returns the last element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(last(arrayLike)).toBe(4);
});
