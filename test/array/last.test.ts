import { array } from "../../src/index.ts";

test("array.last returns the last element of an array", () => {
	expect(array.last([1, 2, 3, 4])).toBe(4);
});

test("array.last returns undefined for an empty array", () => {
	expect(array.last([])).toBe(undefined);
});

test("array.last returns the last element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.last(arrayLike)).toBe(4);
});
