import { fn } from "../../src/index.ts";

test("calls the functions in order", () => {
	const square = vi.fn((n: number) => n * n);
	const double = vi.fn((n: number) => n * 2);
	const squareThenDouble = fn.flow(square, double);

	expect(squareThenDouble(2)).toBe(8);
	expect(square).toHaveBeenCalledOnce();
	expect(double).toHaveBeenCalledOnce();

	expect(squareThenDouble(3)).toBe(18);
	expect(square).toHaveBeenCalledTimes(2);
	expect(double).toHaveBeenCalledTimes(2);
});

test("should throw error if `funcs` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		fn.flow(1);
	}).toThrowError(TypeError);
});

test("should return undefined if no functions are provided", () => {
	// @ts-expect-error - intentionally passing invalid type
	expect(fn.flow()()).toBe(undefined);
});
