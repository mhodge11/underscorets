import { HashCache } from "../../src/cache/HashCache.ts";

const initHash = () =>
	new HashCache([
		["a", 1],
		["b", 2],
	]);

test("HashCache can be initialized with an empty object", () => {
	const hash = new HashCache();
	expect(hash.data).toEqual({});
	expect(hash.size).toBe(0);
});

test("HashCache stores a cache in object form", () => {
	const hash = initHash();
	expect(hash.data).toEqual({ a: 1, b: 2 });
	expect(hash.size).toBe(2);
});

test("HashCache values can be retrieved", () => {
	const hash = initHash();
	expect(hash.get("a")).toBe(1);
	expect(hash.get("b")).toBe(2);
});

test("HashCache values can be set", () => {
	const hash = initHash();
	hash.set("a", 3);
	expect(hash.get("a")).toBe(3);
	expect(hash.data).toEqual({ a: 3, b: 2 });
	expect(hash.size).toBe(2);

	hash.set("c", 4);
	expect(hash.get("c")).toBe(4);
	expect(hash.data).toEqual({ a: 3, b: 2, c: 4 });
	expect(hash.size).toBe(3);
});

test("HashCache values can be deleted", () => {
	const hash = initHash();
	const result = hash.delete("a");
	expect(result).toBe(true);
	expect(hash.get("a")).toBeUndefined();
	expect(hash.data).toEqual({ b: 2 });
	expect(hash.size).toBe(1);
});

test("HashCache can be cleared", () => {
	const hash = initHash();
	hash.clear();
	expect(hash.data).toEqual({});
	expect(hash.size).toBe(0);
});

test("HashCache can test for the presence of a key", () => {
	const hash = initHash();
	expect(hash.has("a")).toBe(true);
	expect(hash.has("b")).toBe(true);
	expect(hash.has("c")).toBe(false);
});

test("HashCache returns false for delete if a key is not present", () => {
	const hash = initHash();
	const result = hash.delete("c");
	expect(result).toBe(false);
	expect(hash.data).toEqual({ a: 1, b: 2 });
	expect(hash.size).toBe(2);
});

test("HashCache returns undefined for get if a key is not present", () => {
	const hash = initHash();
	expect(hash.get("c")).toBeUndefined();
	expect(hash.data).toEqual({ a: 1, b: 2 });
	expect(hash.size).toBe(2);
});

test("HashCache returns '__hash_undefined__' for get if a key is present but the value is undefined", () => {
	const hash = initHash();
	hash.set("c", undefined);
	expect(hash.get("c")).toBeUndefined();
	expect(hash.data).toEqual({ a: 1, b: 2, c: "__hash_undefined__" });
	expect(hash.size).toBe(3);
});
