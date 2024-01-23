import { filterObject } from "@object/index.ts";

test("filterObject filters an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(filterObject(object, (value) => value > 1)).toEqual({
		b: 2,
		c: 3,
	});
});

test("filterObject returns an empty obj if the obj is empty", () => {
	expect(filterObject({}, () => true)).toEqual({});
});

test("filterObject returns an empty obj if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(filterObject(null, () => true)).toEqual({});
	// @ts-expect-error - Testing invalid input
	expect(filterObject(undefined, () => true)).toEqual({});
});
