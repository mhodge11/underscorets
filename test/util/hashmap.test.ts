import { util } from "../../src/index.ts";

test("should create an empty hashmap", () => {
	const map = new util.HashMap();
	expect(map).toBeDefined();
	expect(map.size).toBe(0);
});

test("should create a hashmap from an object", () => {
	const map = util.HashMap.from({ a: 1, b: 2, c: 3 });
	expect(map).toBeDefined();
	expect(map.size).toBe(3);
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get("c")).toBe(3);
});

test("should create a hashmap from an object with a size", () => {
	const map = util.HashMap.from({ a: 1, b: 2, c: 3 }, 10);
	expect(map).toBeDefined();
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get("c")).toBe(3);
});

test("should create a hashmap from a string", () => {
	const map = util.HashMap.fromString('{"a":1,"b":2,"c":3}');
	expect(map).toBeDefined();
	expect(map.size).toBe(3);
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get("c")).toBe(3);

	const map1 = util.HashMap.fromString('{"a":1,"b":2,"c":3}', 3);
	expect(map1).toBeDefined();
	expect(map1.size).toBe(3);
	expect(map1.get("a")).toBe(1);
	expect(map1.get("b")).toBe(2);
	expect(map1.get("c")).toBe(3);

	const map2 = util.HashMap.fromString("{}");
	expect(map2).toBeDefined();
	expect(map2.size).toBe(0);

	const map3 = util.HashMap.fromString("HashMap {}");
	expect(map3).toBeDefined();
	expect(map3.size).toBe(0);

	expect(() => util.HashMap.fromString("foo")).toThrow(Error);
	expect(() => util.HashMap.fromString("[]")).toThrow(Error);
});

test("should set a value", () => {
	const map = new util.HashMap();
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision", () => {
	const map = new util.HashMap(1);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 2", () => {
	const map = new util.HashMap(2);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 3", () => {
	const map = new util.HashMap(3);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 4", () => {
	const map = new util.HashMap(4);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 5", () => {
	const map = new util.HashMap(5);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 6", () => {
	const map = new util.HashMap(6);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should set a value with a hash collision and a size of 7", () => {
	const map = new util.HashMap(7);
	expect(map.set("a", 1)).toEqual(["a", 1]);
	expect(map.set("b", 2)).toEqual(["b", 2]);
	expect(map.set("c", 3)).toEqual(["c", 3]);
	expect(map.size).toBe(3);
});

test("should get a value", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get("c")).toBe(3);
	expect(map.get("d")).toBeUndefined();
});

test("should remove a value", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.remove("a")).toBe(1);
	expect(map.remove("b")).toBe(2);
	expect(map.remove("c")).toBe(3);
	expect(map.remove("d")).toBeUndefined();
	expect(map.remove("a")).toBeUndefined();
	expect(map.size).toBe(0);
});

test("should check if a key exists", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.has("a")).toBe(true);
	expect(map.has("b")).toBe(true);
	expect(map.has("c")).toBe(true);
	expect(map.has("d")).toBe(false);
});

test("should get all the keys", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	const keys = map.keys();
	expect(keys).toContain("a");
	expect(keys).toContain("b");
	expect(keys).toContain("c");
	expect(keys).toHaveLength(3);
});

test("should copy the hashmap", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	const copy = map.copy();
	expect(copy).not.toBe(map);
	expect(copy).toEqual(map);
});

test("should copy the hashmap with a size", () => {
	const map = new util.HashMap();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	const copy = map.copy(10);
	expect(copy).not.toBe(map);
});

test("should convert the hashmap to an array", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.toArray().toSorted((a, b) => a[1] - b[1])).toEqual([
		["a", 1],
		["b", 2],
		["c", 3],
	]);
});

test("should convert the hashmap to a string", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.toString()).toBe('HashMap {"b":2,"c":3,"a":1}');
});

test("should convert the hashmap to an object", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.toObject()).toEqual({ a: 1, b: 2, c: 3 });
});

test("should convert the hashmap to JSON", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.toJSON()).toEqual({ a: 1, b: 2, c: 3 });
	expect(JSON.stringify(map)).toBe('{"b":2,"c":3,"a":1}');
});

test("should be able to get raw data", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.raw).toBeDefined();
});

test("should be able to set a hash function", () => {
	const map = new util.HashMap<number>();
	map.hash = (key) => key.length;
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	expect(map.get("a")).toBe(1);
	expect(map.get("b")).toBe(2);
	expect(map.get("c")).toBe(3);

	expect(() => map.set("aaaaaaaaaaaa", 4)).toThrow(Error);
});

test("can set a value to a key that already has a value", () => {
	const map = new util.HashMap<number>();
	map.set("a", 1);
	map.set("b", 2);
	map.set("c", 3);
	map.set("a", 4);
	expect(map.get("a")).toBe(4);
});

test("toArray returns empty array if hashmap is empty", () => {
	const map = new util.HashMap<number>();
	expect(map.toArray()).toEqual([]);
});
