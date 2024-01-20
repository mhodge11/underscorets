import { obj } from "../../src/index.ts";

test("obj.keys returns an array of keys", () => {
	const object = { a: 1, b: 2, c: 3 };
	const keys = obj.keys(object);
	expect(keys.length).toBe(3);
	expect(keys).toContain("a");
	expect(keys).toContain("b");
	expect(keys).toContain("c");
});

test("obj.keys returns an empty array if the obj is empty", () => {
	expect(obj.keys({})).toEqual([]);
});

test("obj.keys returns an empty array if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(obj.keys(null)).toEqual([]);
	// @ts-expect-error - Testing invalid input
	expect(obj.keys(undefined)).toEqual([]);
});
