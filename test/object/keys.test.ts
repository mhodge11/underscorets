import { keys } from "../../src/index.ts";

test("keys returns an array of keys", () => {
	const object = { a: 1, b: 2, c: 3 };
	const k = keys(object);
	expect(k.length).toBe(3);
	expect(k).toContain("a");
	expect(k).toContain("b");
	expect(k).toContain("c");
});

test("keys returns an empty array if the obj is empty", () => {
	expect(keys({})).toEqual([]);
});

test("keys returns an empty array if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(keys(null)).toEqual([]);
	// @ts-expect-error - Testing invalid input
	expect(keys(undefined)).toEqual([]);
});
