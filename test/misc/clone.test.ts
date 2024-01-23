import { clone } from "@misc/index.ts";

test("clone a string", () => {
	expect(clone("abc")).toBe("abc");
});

test("clone a number", () => {
	expect(clone(123)).toBe(123);
});

test("clone a boolean", () => {
	expect(clone(true)).toBe(true);
});

test("clone a null", () => {
	expect(clone(null)).toBe(null);
});

test("clone an undefined", () => {
	expect(clone(undefined)).toBe(undefined);
});

test("clone a symbol", () => {
	const symbol = Symbol();
	expect(clone(symbol)).toEqual(symbol);
});

test("clone a BigInt", () => {
	expect(clone(BigInt(123))).toEqual(BigInt(123));
});

test("clone a Date", () => {
	const date = new Date();
	expect(clone(date)).toEqual(date);
});

test("clone a RegExp", () => {
	const regexp = /abc/;
	expect(clone(regexp)).toEqual(regexp);
});

test("clone an object", () => {
	const object = { foo: "bar" };
	expect(clone(object)).toEqual(object);
});

test("clone an array", () => {
	const array = [1, 2, 3];
	expect(clone(array)).toEqual(array);
});

test("clone a Map", () => {
	const map = new Map();
	expect(clone(map)).toEqual(map);
});

test("clone a Set", () => {
	const set = new Set();
	expect(clone(set)).toEqual(set);
});
