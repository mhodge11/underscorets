import { fn } from "../../src/index.ts";

test("only calls 3 times", () => {
	const testFn = vi.fn();
	const beforeFn = fn.maxCalls(testFn, 3);

	beforeFn();
	beforeFn();
	expect(testFn).toHaveBeenCalledTimes(2);

	beforeFn();
	beforeFn();
	expect(testFn).toHaveBeenCalledTimes(3);
});

test("throws an error when func is not a function", () => {
	expect(() => fn.maxCalls(undefined as any, 1)).toThrow(TypeError);
});
