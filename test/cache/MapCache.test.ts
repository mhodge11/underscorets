import { HashCache } from "../../src/cache/HashCache.ts";
import { MapCache } from "../../src/cache/MapCache.ts";

const initMap = () =>
	new MapCache([
		["a", 1],
		["b", 2],
		[1, 3],
		[{ e: 5 }, { f: 6 }],
	]);

test("MapCache can be initialized with an empty object", () => {
	const map = new MapCache();
	expect(map.data).toEqual({
		hash: new HashCache(),
		map: new Map(),
		string: new HashCache(),
	});
	expect(map.size).toBe(0);
});

test("MapCache stores the entries based on their key types", () => {
	const map = initMap();
	expect(map.data).toEqual({
		hash: new HashCache([[1, 3]]),
		map: new Map([[{ e: 5 }, { f: 6 }]]),
		string: new HashCache([
			["a", 1],
			["b", 2],
		]),
	});
	expect(map.size).toBe(4);
});

test("MapCache values can be retrieved", () => {
	const map = initMap();
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get(1)).toBe(3);
	expect(map.get({ e: 5 })).toEqual({ f: 6 });
});

test("MapCache values can be set", () => {
	const map = initMap();
	map.set("a", 3);
	expect(map.get("a")).toBe(3);
	expect(map.data).toEqual({
		hash: new HashCache([[1, 3]]),
		map: new Map([[{ e: 5 }, { f: 6 }]]),
		string: new HashCache([
			["a", 3],
			["b", 2],
		]),
	});
	expect(map.size).toBe(4);

	map.set("c", 4);
	expect(map.get("c")).toBe(4);
	expect(map.data).toEqual({
		hash: new HashCache([[1, 3]]),
		map: new Map([[{ e: 5 }, { f: 6 }]]),
		string: new HashCache([
			["a", 3],
			["b", 2],
			["c", 4],
		]),
	});
	expect(map.size).toBe(5);
});

test("MapCache values can be deleted", () => {
	const map = initMap();
	const result = map.delete("a");
	expect(result).toBe(true);
	expect(map.get("a")).toBeUndefined();
	expect(map.data).toEqual({
		hash: new HashCache([[1, 3]]),
		map: new Map([[{ e: 5 }, { f: 6 }]]),
		string: new HashCache([["b", 2]]),
	});
	expect(map.size).toBe(3);

	const result2 = map.delete({ e: 5 });
	expect(result2).toBe(true);
	expect(map.get({ e: 5 })).toBeUndefined();
	expect(map.data).toEqual({
		hash: new HashCache([[1, 3]]),
		map: new Map(),
		string: new HashCache([["b", 2]]),
	});
	expect(map.size).toBe(2);

	const result3 = map.delete(1);
	expect(result3).toBe(true);
	expect(map.get(1)).toBeUndefined();
	expect(map.data).toEqual({
		hash: new HashCache(),
		map: new Map(),
		string: new HashCache([["b", 2]]),
	});
	expect(map.size).toBe(1);

	const result4 = map.delete("c");
	expect(result4).toBe(false);
	expect(map.data).toEqual({
		hash: new HashCache(),
		map: new Map(),
		string: new HashCache([["b", 2]]),
	});
	expect(map.size).toBe(1);
});

test("MapCache can be cleared", () => {
	const map = initMap();
	map.clear();
	expect(map.data).toEqual({
		hash: new HashCache(),
		map: new Map(),
		string: new HashCache(),
	});
	expect(map.size).toBe(0);
});

test("MapCache can test for the presence of a key", () => {
	const map = initMap();
	expect(map.has("a")).toBe(true);
	expect(map.has("b")).toBe(true);
	expect(map.has(1)).toBe(true);
	expect(map.has({ e: 5 })).toBe(true);
	expect(map.has({ f: 6 })).toBe(false);
	expect(map.has("c")).toBe(false);
});

test("MapCache returns the correct map values after a key is deleted", () => {
	const map = initMap();
	map.set({ g: 7 }, { h: 8 });
	map.delete({ e: 5 });
	expect(map.get({ g: 7 })).toEqual({ h: 8 });
	expect(map.size).toBe(4);
});
