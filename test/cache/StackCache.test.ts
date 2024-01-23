import { ListCache } from "@cache/ListCache.ts";
import { MapCache } from "@cache/MapCache.ts";
import { StackCache } from "@cache/StackCache.ts";

const initStack = () =>
	new StackCache([
		[0, 1],
		[1, 2],
		[2, 3],
		[3, 4],
	]);

test("StackCache can be initialized with an empty object", () => {
	const stack = new StackCache();
	expect(stack.data).toEqual(new ListCache());
	expect(stack.size).toBe(0);
});

test("StackCache stores a cache in array form", () => {
	const stack = initStack();
	expect(stack.data).toEqual(
		new ListCache([
			[0, 1],
			[1, 2],
			[2, 3],
			[3, 4],
		]),
	);
	expect(stack.size).toBe(4);
});

test("StackCache values can be retrieved", () => {
	const stack = initStack();
	expect(stack.get(0)).toBe(1);
	expect(stack.get(1)).toBe(2);
	expect(stack.get(2)).toBe(3);
	expect(stack.get(3)).toBe(4);
});

test("StackCache values can be set", () => {
	const stack = initStack();
	stack.set(0, 3);
	expect(stack.get(0)).toBe(3);
	expect(stack.data).toEqual(
		new ListCache([
			[0, 3],
			[1, 2],
			[2, 3],
			[3, 4],
		]),
	);
	expect(stack.size).toBe(4);

	stack.set(4, 5);
	expect(stack.get(4)).toBe(5);
	expect(stack.data).toEqual(
		new ListCache([
			[0, 3],
			[1, 2],
			[2, 3],
			[3, 4],
			[4, 5],
		]),
	);
	expect(stack.size).toBe(5);
});

test("StackCache values can be deleted", () => {
	const stack = initStack();
	stack.delete(0);
	expect(stack.get(0)).toBe(undefined);
	expect(stack.data).toEqual(
		new ListCache([
			[1, 2],
			[2, 3],
			[3, 4],
		]),
	);
	expect(stack.size).toBe(3);
});

test("StackCache can be cleared", () => {
	const stack = initStack();
	stack.clear();
	expect(stack.data).toEqual(new ListCache());
	expect(stack.size).toBe(0);
});

test("StackCache can test for existence of a key", () => {
	const stack = initStack();
	expect(stack.has(0)).toBe(true);
	expect(stack.has(1)).toBe(true);
	expect(stack.has(2)).toBe(true);
	expect(stack.has(3)).toBe(true);
	expect(stack.has(4)).toBe(false);
});

test("StackCache converts to a map cache upon reaching a size of 200", () => {
	const stack = new StackCache();
	for (let i = 0; i < 200; i++) stack.set(i, i);
	expect(stack.data).toBeInstanceOf(MapCache);
	expect(stack.size).toBe(200);
});
