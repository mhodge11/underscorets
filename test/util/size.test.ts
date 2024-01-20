import { util } from "../../src/index.ts";

test("util.size returns the size of an object", () => {
	const obj = { a: 1, b: 2, c: 3 };
	expect(util.size(obj)).toBe(3);
});

test("util.size returns the size of a string", () => {
	const str = "abc";
	expect(util.size(str)).toBe(3);
});

test("util.size returns the size of a string object", () => {
	const str = new String("abc");
	expect(util.size(str)).toBe(3);
});

test("util.size returns the size of an array", () => {
	const arr = [1, 2, 3];
	expect(util.size(arr)).toBe(3);
});

test("util.size returns the size of a Set", () => {
	const set = new Set([1, 2, 3]);
	expect(util.size(set)).toBe(3);
});

test("util.size returns the size of a Map", () => {
	const map = new Map([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
	expect(util.size(map)).toBe(3);
});

test("util.size returns the size of an array like", () => {
	const arrayLike = { length: 3 };
	expect(util.size(arrayLike)).toBe(3);
});

test("util.size returns 0 if the value is null or undefined", () => {
	// @ts-ignore
	expect(util.size(null)).toBe(0);
	// @ts-ignore
	expect(util.size(undefined)).toBe(0);
});
