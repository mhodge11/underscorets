import { util } from "../../src/index.ts";

test("util.clone a string", () => {
	expect(util.clone("abc")).toBe("abc");
});

test("util.clone a number", () => {
	expect(util.clone(123)).toBe(123);
});

test("util.clone a boolean", () => {
	expect(util.clone(true)).toBe(true);
});

test("util.clone a null", () => {
	expect(util.clone(null)).toBe(null);
});

test("util.clone an undefined", () => {
	expect(util.clone(undefined)).toBe(undefined);
});

test("util.clone a symbol", () => {
	const symbol = Symbol();
	expect(util.clone(symbol)).toEqual(symbol);
});

test("util.clone a BigInt", () => {
	expect(util.clone(BigInt(123))).toEqual(BigInt(123));
});

test("util.clone a Date", () => {
	const date = new Date();
	expect(util.clone(date)).toEqual(date);
});

test("util.clone a RegExp", () => {
	const regexp = /abc/;
	expect(util.clone(regexp)).toEqual(regexp);
});

test("util.clone an object", () => {
	const object = { foo: "bar" };
	expect(util.clone(object)).toEqual(object);
});

test("util.clone an array", () => {
	const array = [1, 2, 3];
	expect(util.clone(array)).toEqual(array);
});

test("util.clone a Map", () => {
	const map = new Map();
	expect(util.clone(map)).toEqual(map);
});

test("util.clone a Set", () => {
	const set = new Set();
	expect(util.clone(set)).toEqual(set);
});
