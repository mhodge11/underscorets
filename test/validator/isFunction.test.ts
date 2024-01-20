import { validator } from "../../src/index.ts";

test("return true if `value` is a function", () => {
	expect(validator.isFunction(Function)).toBe(true);
	expect(validator.isFunction(() => {})).toBe(true);
	// biome-ignore lint/complexity/useArrowFunction: For testing purposes
	expect(validator.isFunction(function () {})).toBe(true);
	expect(validator.isFunction(async () => {})).toBe(true);
	// biome-ignore lint/complexity/useArrowFunction: For testing purposes
	expect(validator.isFunction(async function () {})).toBe(true);
});

test("return false if `value` is not a function", () => {
	expect(validator.isFunction([1, 2, 3])).toBe(false);
	expect(validator.isFunction({})).toBe(false);
	expect(validator.isFunction("abc")).toBe(false);
	expect(validator.isFunction(undefined)).toBe(false);
	expect(validator.isFunction(null)).toBe(false);
	expect(validator.isFunction(1)).toBe(false);
	expect(validator.isFunction(true)).toBe(false);
	expect(validator.isFunction(Symbol())).toBe(false);
});
