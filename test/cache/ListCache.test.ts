import { ListCache } from "../../src/cache/ListCache.ts";

const initList = () =>
	new ListCache([
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	]);

test("ListCache can be initialized with an empty object", () => {
	const list = new ListCache();
	expect(list.data).toEqual([]);
	expect(list.size).toBe(0);
});

test("ListCache stores a cache in array form", () => {
	const list = initList();
	expect(list.data).toEqual([
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	]);
	expect(list.size).toBe(4);
});

test("ListCache values can be retrieved", () => {
	const list = initList();
	expect(list.get(0)).toBe(1);
	expect(list.get(1)).toBe(2);
	expect(list.get(2)).toBe(3);
	expect(list.get(3)).toBe(4);
});

test("ListCache values can be set", () => {
	const list = initList();
	list.set(0, 3);
	expect(list.get(0)).toBe(3);
	expect(list.data).toEqual([
		[0, 3],
		[1, 2],
		[2, 3],
		[3, 4],
	]);
	expect(list.size).toBe(4);

	list.set(4, 5);
	expect(list.get(4)).toBe(5);
	expect(list.data).toEqual([
		[0, 3],
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	]);
	expect(list.size).toBe(5);
});

test("ListCache values can be deleted", () => {
	const list = initList();
	const result = list.delete(0);
	expect(result).toBe(true);
	expect(list.get(0)).toBeUndefined();
	expect(list.data).toEqual([
		[1, 2],
		[2, 3],
		[3, 4],
	]);
	expect(list.size).toBe(3);

	const result2 = list.delete(4);
	expect(result2).toBe(false);
	expect(list.get(4)).toBeUndefined();
	expect(list.data).toEqual([
		[1, 2],
		[2, 3],
		[3, 4],
	]);
	expect(list.size).toBe(3);

	const result3 = list.delete(3);
	expect(result3).toBe(true);
	expect(list.get(3)).toBeUndefined();
	expect(list.data).toEqual([
		[1, 2],
		[2, 3],
	]);
	expect(list.size).toBe(2);
});

test("ListCache can be cleared", () => {
	const list = initList();
	list.clear();
	expect(list.data).toEqual([]);
	expect(list.size).toBe(0);
});

test("ListCache can test for the presence of a key", () => {
	const list = initList();
	expect(list.has(0)).toBe(true);
	expect(list.has(1)).toBe(true);
	expect(list.has(2)).toBe(true);
	expect(list.has(3)).toBe(true);
	expect(list.has(4)).toBe(false);
});
