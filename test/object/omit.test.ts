import { omit } from "@object/index.ts";

test("omit the specified keys from an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(omit(object, ["a", "c"])).toEqual({ b: 2 });
});

test("not mutate the original obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(omit(object, ["a", "c"])).not.toBe(object);
});

test("return an empty obj if all keys are omitted", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(omit(object, ["a", "b", "c"])).toEqual({});
});
