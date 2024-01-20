import { validator } from "../../src/index.ts";

test("return true if `value` is an error", () => {
	expect(validator.isError(new Error())).toBe(true);
	expect(validator.isError(new EvalError())).toBe(true);
	expect(validator.isError(new RangeError())).toBe(true);
	expect(validator.isError(new ReferenceError())).toBe(true);
	expect(validator.isError(new SyntaxError())).toBe(true);
	expect(validator.isError(new TypeError())).toBe(true);
	expect(validator.isError(new URIError())).toBe(true);
});

test("return false if `value` is not an error", () => {
	expect(validator.isError([1, 2, 3])).toBe(false);
	expect(validator.isError(Function)).toBe(false);
	expect(validator.isError({})).toBe(false);
	expect(validator.isError("abc")).toBe(false);
	expect(validator.isError(undefined)).toBe(false);
	expect(validator.isError(null)).toBe(false);
	expect(validator.isError(1)).toBe(false);
	expect(validator.isError(true)).toBe(false);
	expect(validator.isError(Symbol())).toBe(false);
});
