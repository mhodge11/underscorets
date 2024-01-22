import { includes } from "../../src/index.ts";

test("includes returns true if the array includes the value", () => {
	expect(includes([1, 2, 3, 4], 3)).toBe(true);
});

test("includes returns false if the array does not include the value", () => {
	expect(includes([1, 2, 3, 4], 5)).toBe(false);
});

test("includes can use a custom comparator", () => {
	expect(includes([1, 2, 3, 4], 3, (a, b) => a === b)).toBe(true);
});

test("includes returns false for an empty array", () => {
	expect(includes([], 1)).toBe(false);
});
