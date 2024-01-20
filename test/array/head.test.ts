import { array } from "../../src/index.ts";

test("array.head returns the first element of an array", () => {
	expect(array.head([1, 2, 3, 4])).toBe(1);
});

test("array.head returns undefined for an empty array", () => {
	expect(array.head([])).toBe(undefined);
});

test("array.head returns the first element of an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(array.head(arrayLike)).toBe(1);
});
