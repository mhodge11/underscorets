import { obj } from "../../src/index.ts";

test("obj.pick the specified keys from an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.pick(object, ["a", "c"])).toEqual({ a: 1, c: 3 });
});

test("return an empty obj when no keys are specified", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.pick(object, [])).toEqual({});
});

test("ignores non-existent keys", () => {
	const object = { a: 1, b: 2, c: 3 };
	// @ts-expect-error - d does not exist on obj
	expect(obj.pick(object, ["a", "d"])).toEqual({ a: 1 });
});
