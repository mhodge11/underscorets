import { once } from "../../src/index.ts";

test("should invoke `func` once", () => {
	const mock = vi.fn();
	const func = once(mock);
	func();
	func();
	func();
	expect(mock).toBeCalledTimes(1);
});

test("should throw error if `func` is not a function", () => {
	expect(() => {
		// @ts-expect-error - intentionally passing invalid type
		once(1);
	}).toThrowError(TypeError);
});
