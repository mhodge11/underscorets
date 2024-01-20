import { obj } from "../../src/index.ts";

test("obj.findKey finds a key in an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.findKey(object, (value) => value === 2)).toBe("b");
});

test("obj.findKey returns undefined if the obj is empty", () => {
	expect(obj.findKey({}, () => true)).toBe(undefined);
});

test("obj.findKey returns undefined if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(obj.findKey(null, () => true)).toBe(undefined);
	// @ts-expect-error - Testing invalid input
	expect(obj.findKey(undefined, () => true)).toBe(undefined);
});

test("obj.findKey returns undefined if no key is found", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(obj.findKey(object, (value) => value === 4)).toBe(undefined);
});
