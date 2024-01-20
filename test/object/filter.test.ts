import { obj } from "../../src/index.ts";

test("obj.filter filters an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.filter(object, (value) => value > 1)).toEqual({ b: 2, c: 3 });
});

test("obj.filter returns an empty obj if the obj is empty", () => {
	expect(obj.filter({}, () => true)).toEqual({});
});

test("obj.filter returns an empty obj if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(obj.filter(null, () => true)).toEqual({});
	// @ts-expect-error - Testing invalid input
	expect(obj.filter(undefined, () => true)).toEqual({});
});
