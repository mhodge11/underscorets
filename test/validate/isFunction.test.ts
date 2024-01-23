import { isFunction } from "@validate/index.ts";

test("return true if `value` is a function", () => {
	expect(isFunction(Function)).toBe(true);
	expect(isFunction(() => {})).toBe(true);
	// biome-ignore lint/complexity/useArrowFunction: For testing purposes
	expect(isFunction(function () {})).toBe(true);
	expect(isFunction(async () => {})).toBe(true);
	// biome-ignore lint/complexity/useArrowFunction: For testing purposes
	expect(isFunction(async function () {})).toBe(true);
});

test("return false if `value` is not a function", () => {
	expect(isFunction([1, 2, 3])).toBe(false);
	expect(isFunction({})).toBe(false);
	expect(isFunction("abc")).toBe(false);
	expect(isFunction(undefined)).toBe(false);
	expect(isFunction(null)).toBe(false);
	expect(isFunction(1)).toBe(false);
	expect(isFunction(true)).toBe(false);
	expect(isFunction(Symbol())).toBe(false);
});
