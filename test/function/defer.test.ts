import { defer } from "@function/index.ts";

beforeAll(() => {
	vi.useFakeTimers();
});

test("should call the function", () => {
	const func = vi.fn();
	defer(func);
	expect(func).toHaveBeenCalledTimes(0);
	vi.advanceTimersByTime(1);
	expect(func).toHaveBeenCalledOnce();
});

test("should call the function with the given arguments", async () => {
	const func = vi.fn();
	defer(func, 1, 2, 3);
	expect(func).toHaveBeenCalledTimes(0);
	vi.advanceTimersByTime(1);
	expect(func).toHaveBeenCalledWith(1, 2, 3);
});

test("should throw error if `func` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		defer(1);
	}).toThrowError(TypeError);
});
