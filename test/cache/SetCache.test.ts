import { HashCache } from "../../src/cache/HashCache.ts";
import { MapCache } from "../../src/cache/MapCache.ts";
import { SetCache } from "../../src/cache/SetCache.ts";
import { HASH_UNDEFINED } from "../../src/config/constants.ts";

const initSet = () => new SetCache([0, 1, 2, 3]);

test("SetCache can be initialized with an empty object", () => {
	const set = new SetCache();
	expect(set.data).toEqual(new MapCache());
	expect(set.size).toBe(0);
});

test("SetCache values can be retrieved", () => {
	const set = initSet();
	expect(set.has(0)).toBe(true);
	expect(set.has(1)).toBe(true);
	expect(set.has(2)).toBe(true);
	expect(set.has(3)).toBe(true);
});

test("SetCache values can be added", () => {
	const set = initSet();
	set.add(4);
	expect(set.has(4)).toBe(true);
	expect(set.data).toEqual({
		data: {
			hash: new HashCache([
				[0, HASH_UNDEFINED],
				[1, HASH_UNDEFINED],
				[2, HASH_UNDEFINED],
				[3, HASH_UNDEFINED],
				[4, HASH_UNDEFINED],
			]),
			map: new Map(),
			string: new HashCache(),
		},
		size: 5,
	});
	expect(set.size).toBe(5);
});

test("SetCache values can be pushed", () => {
	const set = initSet();
	set.push(4);
	expect(set.has(4)).toBe(true);
	expect(set.data).toEqual({
		data: {
			hash: new HashCache([
				[0, HASH_UNDEFINED],
				[1, HASH_UNDEFINED],
				[2, HASH_UNDEFINED],
				[3, HASH_UNDEFINED],
				[4, HASH_UNDEFINED],
			]),
			map: new Map(),
			string: new HashCache(),
		},
		size: 5,
	});
	expect(set.size).toBe(5);
});
