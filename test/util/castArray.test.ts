import { util } from "../../src/index.ts";

test("util.castArray keeps array untouched", () => {
	expect(util.castArray([1, 2, 3])).toEqual([1, 2, 3]);
});

test("util.castArray casts any non-array to an array", () => {
	expect(util.castArray("abc")).toEqual(["abc"]);
	expect(util.castArray(1)).toEqual([1]);
	expect(util.castArray({ a: 1 })).toEqual([{ a: 1 }]);
	expect(util.castArray(null)).toEqual([null]);
	expect(util.castArray(undefined)).toEqual([undefined]);
	expect(util.castArray(true)).toEqual([true]);
	expect(util.castArray(false)).toEqual([false]);
});
