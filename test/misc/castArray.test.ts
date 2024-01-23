import { castArray } from "@misc/index.ts";

test("castArray keeps array untouched", () => {
	expect(castArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test("castArray casts any non-array to an array", () => {
	expect(castArray("abc")).toEqual(["abc"]);
	expect(castArray(1)).toEqual([1]);
	expect(castArray({ a: 1 })).toEqual([{ a: 1 }]);
	expect(castArray(null)).toEqual([null]);
	expect(castArray(undefined)).toEqual([undefined]);
	expect(castArray(true)).toEqual([true]);
	expect(castArray(false)).toEqual([false]);
});
