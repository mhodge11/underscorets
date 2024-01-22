import { isNil } from "../../src/index.ts";

test("return true if `value` is null or undefined", () => {
	expect(isNil(null)).toBe(true);
	expect(isNil(undefined)).toBe(true);
});

test("return false if `value` is not null or undefined", () => {
	expect(isNil([1, 2, 3])).toBe(false);
	expect(isNil(Function)).toBe(false);
	expect(isNil({})).toBe(false);
	expect(isNil("abc")).toBe(false);
	expect(isNil(1)).toBe(false);
	expect(isNil(true)).toBe(false);
	expect(isNil(Symbol())).toBe(false);
});
