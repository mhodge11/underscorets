import { util } from "../../src/index.ts";

test("util.toArray an array", () => {
	expect(util.toArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test("util.toArray an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, length: 3 };
	expect(util.toArray(arrayLike)).toEqual([1, 2, 3]);
});

test("util.toArray an empty array returns an empty array", () => {
	expect(util.toArray([])).toEqual([]);
});

test("util.toArray an object returns an empty array", () => {
	expect(util.toArray({})).toEqual([]);
});

test("util.toArray a string returns an array with the string", () => {
	expect(util.toArray("test")).toEqual(["t", "e", "s", "t"]);
	expect(util.toArray(new String("test"))).toEqual(["t", "e", "s", "t"]);
});

test("util.toArray a number returns an empty array", () => {
	expect(util.toArray(1)).toEqual([]);
});

test("util.toArray a boolean returns an empty array", () => {
	expect(util.toArray(true)).toEqual([]);
});

test("util.toArray a null returns an empty array", () => {
	expect(util.toArray(null)).toEqual([]);
});

test("util.toArray an undefined returns an empty array", () => {
	expect(util.toArray(undefined)).toEqual([]);
});

test("util.toArray a symbol returns an empty array", () => {
	expect(util.toArray(Symbol())).toEqual([]);
});

test("util.toArray a map returns the values of the map", () => {
	const map = new Map();
	map.set("a", 1);
	map.set("b", 2);
	expect(util.toArray(map)).toEqual([
		["a", 1],
		["b", 2],
	]);
});

test("util.toArray a set returns the values of the set", () => {
	const set = new Set();
	set.add("a");
	set.add("b");
	expect(util.toArray(set)).toEqual(["a", "b"]);
});
