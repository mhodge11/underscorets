import { cloneDeep } from "@misc/index.ts";

test("cloneDeep an object", () => {
	const object = { foo: "bar" };
	const clonedObject = cloneDeep(object);
	expect(clonedObject).toEqual(object);
	expect(clonedObject).not.toBe(object);
});

test("cloneDeep an array", () => {
	const array = [1, 2, 3];
	const clonedArray = cloneDeep(array);
	expect(clonedArray).toEqual(array);
	expect(clonedArray).not.toBe(array);
});

test("cloneDeep a Map", () => {
	const map = new Map();
	const clonedMap = cloneDeep(map);
	expect(clonedMap).toEqual(map);
	expect(clonedMap).not.toBe(map);
});

test("cloneDeep a Set", () => {
	const set = new Set();
	const clonedSet = cloneDeep(set);
	expect(clonedSet).toEqual(set);
	expect(clonedSet).not.toBe(set);
});

test("cloneDeep a Date", () => {
	const date = new Date();
	const clonedDate = cloneDeep(date);
	expect(clonedDate).toEqual(date);
	expect(clonedDate).not.toBe(date);
});

test("cloneDeep a RegExp", () => {
	const regexp = /abc/;
	const clonedRegExp = cloneDeep(regexp);
	expect(clonedRegExp).toEqual(regexp);
	expect(clonedRegExp).not.toBe(regexp);
});

test("cloneDeep a symbol", () => {
	const symbol = Symbol();
	const clonedSymbol = cloneDeep(symbol);
	expect(clonedSymbol).toEqual(symbol);
});

test("cloneDeep a BigInt", () => {
	const bigint = BigInt(123);
	const clonedBigInt = cloneDeep(bigint);
	expect(clonedBigInt).toEqual(bigint);
});
