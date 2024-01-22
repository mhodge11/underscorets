import { delay } from "../../src/index.ts";

beforeAll(() => {
	vi.useFakeTimers();
});

test("should call the function after the delay", async () => {
	const func = vi.fn();
	delay(func, 1000);
	expect(func).toHaveBeenCalledTimes(0);
	vi.advanceTimersByTime(1000);
	expect(func).toHaveBeenCalledTimes(1);
});

test("should call the function after a delay of 1 ms if no delay is specified", async () => {
	const func = vi.fn();
	// @ts-expect-error - intentionally passing invalid type
	delay(func);
	expect(func).toHaveBeenCalledTimes(0);
	vi.advanceTimersByTime(1);
	expect(func).toHaveBeenCalledTimes(1);
});

test("should call the function with the given arguments", async () => {
	const func = vi.fn();
	delay(func, 1000, 1, 2, 3);
	expect(func).toHaveBeenCalledTimes(0);
	vi.advanceTimersByTime(1000);
	expect(func).toHaveBeenCalledWith(1, 2, 3);
});

test("should throw error if `func` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		delay(1);
	}).toThrowError(TypeError);
});
