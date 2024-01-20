import { array } from "../../src/index.ts";

test("array.compact an array", () => {
	expect(array.compact([0, 1, undefined, null, 2, null])).toEqual([1, 2]);
});

test("array.compact an array like", () => {
	const arrayLike = { 0: 0, 1: 1, 2: undefined, 3: null, 4: 2, length: 5 };
	expect(array.compact(arrayLike)).toEqual([1, 2]);
});

test("array.compact an empty array returns an empty array", () => {
	expect(array.compact([])).toEqual([]);
});

test("array.compact an array with only null and undefined values returns an empty array", () => {
	expect(array.compact([null, undefined])).toEqual([]);
});
