import { isUndefined } from "../../src/index.ts";

test("return true if `value` is undefined", () => {
	expect(isUndefined(undefined)).toBe(true);
});

test("return false if `value` is not undefined", () => {
	expect(isUndefined([1, 2, 3])).toBe(false);
	expect(isUndefined(Function)).toBe(false);
	expect(isUndefined({})).toBe(false);
	expect(isUndefined("abc")).toBe(false);
	expect(isUndefined(null)).toBe(false);
	expect(isUndefined(1)).toBe(false);
	expect(isUndefined(true)).toBe(false);
	expect(isUndefined(Symbol())).toBe(false);
});
