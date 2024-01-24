import { toArray } from "@misc/index.ts";

test("toArray an array", () => {
	expect(toArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test("toArray an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(toArray(arrayLike)).toEqual([1, 2, 3]);
});

test("toArray an empty array returns an empty array", () => {
	expect(toArray([])).toEqual([]);
});

test("toArray an object returns an empty array", () => {
	expect(toArray({})).toEqual([]);
});

test("toArray a string returns an array with the string", () => {
	expect(toArray("test")).toEqual(["t", "e", "s", "t"]);
	expect(toArray(new String("test"))).toEqual(["t", "e", "s", "t"]);
	expect(toArray("😍")).toEqual(["😍"]);
});

test("toArray a number returns an empty array", () => {
	expect(toArray(1)).toEqual([]);
});

test("toArray a boolean returns an empty array", () => {
	expect(toArray(true)).toEqual([]);
});

test("toArray a null returns an empty array", () => {
	expect(toArray(null)).toEqual([]);
});

test("toArray an undefined returns an empty array", () => {
	expect(toArray(undefined)).toEqual([]);
});

test("toArray a symbol returns an empty array", () => {
	expect(toArray(Symbol())).toEqual([]);
});

test("toArray a map returns the values of the map", () => {
	const map = new Map();
	map.set("a", 1);
	map.set("b", 2);
	expect(toArray(map)).toEqual([
		["a", 1],
		["b", 2],
	]);
});

test("toArray a set returns the values of the set", () => {
	const set = new Set();
	set.add("a");
	set.add("b");
	expect(toArray(set)).toEqual(["a", "b"]);
});
