import { isSymbol } from "../../src/index.ts";

test("return true if `value` is a symbol", () => {
	expect(isSymbol(Symbol())).toBe(true);
	expect(isSymbol(Symbol("abc"))).toBe(true);
});

test("return false if `value` is not a symbol", () => {
	expect(isSymbol([1, 2, 3])).toBe(false);
	expect(isSymbol(Function)).toBe(false);
	expect(isSymbol({})).toBe(false);
	expect(isSymbol("abc")).toBe(false);
	expect(isSymbol(undefined)).toBe(false);
	expect(isSymbol(null)).toBe(false);
	expect(isSymbol(1)).toBe(false);
	expect(isSymbol(true)).toBe(false);
});
