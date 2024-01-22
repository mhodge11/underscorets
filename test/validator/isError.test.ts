import { isError } from "../../src/index.ts";

test("return true if `value` is an error", () => {
	expect(isError(new Error())).toBe(true);
	expect(isError(new EvalError())).toBe(true);
	expect(isError(new RangeError())).toBe(true);
	expect(isError(new ReferenceError())).toBe(true);
	expect(isError(new SyntaxError())).toBe(true);
	expect(isError(new TypeError())).toBe(true);
	expect(isError(new URIError())).toBe(true);
});

test("return false if `value` is not an error", () => {
	expect(isError([1, 2, 3])).toBe(false);
	expect(isError(Function)).toBe(false);
	expect(isError({})).toBe(false);
	expect(isError("abc")).toBe(false);
	expect(isError(undefined)).toBe(false);
	expect(isError(null)).toBe(false);
	expect(isError(1)).toBe(false);
	expect(isError(true)).toBe(false);
	expect(isError(Symbol())).toBe(false);
});
