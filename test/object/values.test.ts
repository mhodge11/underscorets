import { obj } from "../../src/index.ts";

test("obj.values returns an array of the obj's values", () => {
	const object = { a: 1, b: 2, c: 3 };
	const values = obj.values(object);
	expect(values.length).toBe(3);
	expect(values).toContain(1);
	expect(values).toContain(2);
	expect(values).toContain(3);
});

test("obj.values returns an empty array if the obj is empty", () => {
	expect(obj.values({})).toEqual([]);
});

test("obj.values returns an empty array if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(obj.values(null)).toEqual([]);
	// @ts-expect-error - Testing invalid input
	expect(obj.values(undefined)).toEqual([]);
});
