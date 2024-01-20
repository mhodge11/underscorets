import { fn } from "../../src/index.ts";

test("should flip arguments", () => {
	const func = vi.fn((a: number, b: number) => [a, b]);
	const flipped = fn.flip(func);
	expect(flipped(1, 2)).toEqual([2, 1]);
});

test("should throw error if `func` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		fn.flip(1);
	}).toThrowError(TypeError);
});
