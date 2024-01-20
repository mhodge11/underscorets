import { array } from "../../src/index.ts";

test("array.includes returns true if the array includes the value", () => {
	expect(array.includes([1, 2, 3, 4], 3)).toBe(true);
});

test("array.includes returns false if the array does not include the value", () => {
	expect(array.includes([1, 2, 3, 4], 5)).toBe(false);
});

test("array.includes can use a custom comparator", () => {
	expect(array.includes([1, 2, 3, 4], 3, (a, b) => a === b)).toBe(true);
});

test("array.includes returns false for an empty array", () => {
	expect(array.includes([], 1)).toBe(false);
});
