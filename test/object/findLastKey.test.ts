import { findLastKey } from "@object/index.ts";

test("findLastKey finds a key in an obj", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(findLastKey(object, (value) => value === 2)).toBe("b");

	const object2 = { a: 1, b: 2, c: 2 };
	expect(findLastKey(object2, (value) => value === 2)).toBe("c");
});

test("findLastKey returns undefined if the obj is empty", () => {
	expect(findLastKey({}, () => true)).toBe(undefined);
});

test("findLastKey returns undefined if obj is null or undefined", () => {
	// @ts-expect-error - Testing invalid input
	expect(findLastKey(null, () => true)).toBe(undefined);
	// @ts-expect-error - Testing invalid input
	expect(findLastKey(undefined, () => true)).toBe(undefined);
});

test("findLastKey returns undefined if no key is found", () => {
	const object = { a: 1, b: 2, c: 3 };
	expect(findLastKey(object, (value) => value === 4)).toBe(undefined);
});
