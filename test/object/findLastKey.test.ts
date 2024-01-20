import { obj } from "../../src/index.ts";

test("obj.findLastKey finds a key in an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.findLastKey(object, (value) => value === 2)).toBe("b");

	const object2 = { a: 1, b: 2, c: 2 };
	expect(obj.findLastKey(object2, (value) => value === 2)).toBe("c");
});

test("obj.findLastKey returns undefined if the obj is empty", () => {
	expect(obj.findLastKey({}, () => true)).toBe(undefined);
});

test("obj.findLastKey returns undefined if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(obj.findLastKey(null, () => true)).toBe(undefined);
	// @ts-expect-error - Testing invalid input
	expect(obj.findLastKey(undefined, () => true)).toBe(undefined);
});

test("obj.findLastKey returns undefined if no key is found", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.findLastKey(object, (value) => value === 4)).toBe(undefined);
});
