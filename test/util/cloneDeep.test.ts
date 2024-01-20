import { util } from "../../src/index.ts";

test("util.cloneDeep an object", () => {
	const object = { foo: "bar" };
	const clonedObject = util.cloneDeep(object);
	expect(clonedObject).toEqual(object);
	expect(clonedObject).not.toBe(object);
});

test("util.cloneDeep an array", () => {
	const array = [1, 2, 3];
	const clonedArray = util.cloneDeep(array);
	expect(clonedArray).toEqual(array);
	expect(clonedArray).not.toBe(array);
});

test("util.cloneDeep a Map", () => {
	const map = new Map();
	const clonedMap = util.cloneDeep(map);
	expect(clonedMap).toEqual(map);
	expect(clonedMap).not.toBe(map);
});

test("util.cloneDeep a Set", () => {
	const set = new Set();
	const clonedSet = util.cloneDeep(set);
	expect(clonedSet).toEqual(set);
	expect(clonedSet).not.toBe(set);
});

test("util.cloneDeep a Date", () => {
	const date = new Date();
	const clonedDate = util.cloneDeep(date);
	expect(clonedDate).toEqual(date);
	expect(clonedDate).not.toBe(date);
});

test("util.cloneDeep a RegExp", () => {
	const regexp = /abc/;
	const clonedRegExp = util.cloneDeep(regexp);
	expect(clonedRegExp).toEqual(regexp);
	expect(clonedRegExp).not.toBe(regexp);
});

test("util.cloneDeep a symbol", () => {
	const symbol = Symbol();
	const clonedSymbol = util.cloneDeep(symbol);
	expect(clonedSymbol).toEqual(symbol);
});

test("util.cloneDeep a BigInt", () => {
	const bigint = BigInt(123);
	const clonedBigInt = util.cloneDeep(bigint);
	expect(clonedBigInt).toEqual(bigint);
});
