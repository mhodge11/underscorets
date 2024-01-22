import { findKey } from "../../src/index.ts";

test("findKey finds a key in an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(findKey(object, (value) => value === 2)).toBe("b");
});

test("findKey returns undefined if the obj is empty", () => {
	expect(findKey({}, () => true)).toBe(undefined);
});

test("findKey returns undefined if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(findKey(null, () => true)).toBe(undefined);
	// @ts-expect-error - Testing invalid input
	expect(findKey(undefined, () => true)).toBe(undefined);
});

test("findKey returns undefined if no key is found", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(findKey(object, (value) => value === 4)).toBe(undefined);
});
