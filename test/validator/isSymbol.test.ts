import { validator } from "../../src/index.ts";

test("return true if `value` is a symbol", () => {
	expect(validator.isSymbol(Symbol())).toBe(true);
	expect(validator.isSymbol(Symbol("abc"))).toBe(true);
});

test("return false if `value` is not a symbol", () => {
	expect(validator.isSymbol([1, 2, 3])).toBe(false);
	expect(validator.isSymbol(Function)).toBe(false);
	expect(validator.isSymbol({})).toBe(false);
	expect(validator.isSymbol("abc")).toBe(false);
	expect(validator.isSymbol(undefined)).toBe(false);
	expect(validator.isSymbol(null)).toBe(false);
	expect(validator.isSymbol(1)).toBe(false);
	expect(validator.isSymbol(true)).toBe(false);
});
