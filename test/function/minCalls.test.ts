import { minCalls } from "../../src/index.ts";

test("after function works correctly", () => {
	const testFn = vi.fn();
	const afterFn = minCalls(testFn, 2);

	afterFn(1);
	afterFn(1);
	expect(testFn).toHaveBeenCalledTimes(0);

	afterFn(1);
	afterFn(1);
	expect(testFn).toHaveBeenCalledTimes(2);
});

test("throws an error when func is not a function", () => {
	expect(() => minCalls(undefined as any, 1)).toThrow(TypeError);
});
