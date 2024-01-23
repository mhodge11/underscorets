import { compact } from "@array/index.ts";

test("compact an array", () => {
	expect(compact([0, 1, undefined, null, 2, null])).toEqual([1, 2]);
});

test("compact an array like", () => {
	const arrayLike = { 0: 0, 1: 1, 2: undefined, 3: null, 4: 2, length: 5 };
	expect(compact(arrayLike)).toEqual([1, 2]);
});

test("compact an empty array returns an empty array", () => {
	expect(compact([])).toEqual([]);
});

test("compact an array with only null and undefined values returns an empty array", () => {
	expect(compact([null, undefined])).toEqual([]);
});
