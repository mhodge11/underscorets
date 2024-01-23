import { values } from "@object/index.ts";

test("values returns an array of the obj's values", () => {
	const object = { a: 1, b: 2, c: 3 };
	const v = values(object);
	expect(v.length).toBe(3);
	expect(v).toContain(1);
	expect(v).toContain(2);
	expect(v).toContain(3);
});

test("values returns an empty array if the obj is empty", () => {
	expect(values({})).toEqual([]);
});

test("values returns an empty array if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(values(null)).toEqual([]);
	// @ts-expect-error - Testing invalid input
	expect(values(undefined)).toEqual([]);
});
