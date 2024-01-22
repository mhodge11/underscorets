import { map } from "../../src/index.ts";

test("map maps an array", () => {
	expect(map([1, 2, 3, 4], (n) => n * 2)).toEqual([2, 4, 6, 8]);
});

test("map maps an array like", () => {
	const arrayLike = { 0: 1, 1: 2, 2: 3, 3: 4, length: 4 };
	expect(map(arrayLike, (n) => n * 2)).toEqual([2, 4, 6, 8]);
});

test("map an empty array returns an empty array", () => {
	expect(map([], (n) => n * 2)).toEqual([]);
});
