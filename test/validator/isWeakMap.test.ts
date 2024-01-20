import { validator } from "../../src/index.ts";

test("return true if `value` is a weak map", () => {
	expect(validator.isWeakMap(new WeakMap())).toBe(true);
});

test("return false if `value` is not a weak map", () => {
	expect(validator.isWeakMap([1, 2, 3])).toBe(false);
	expect(validator.isWeakMap(Function)).toBe(false);
	expect(validator.isWeakMap({})).toBe(false);
	expect(validator.isWeakMap("abc")).toBe(false);
	expect(validator.isWeakMap(undefined)).toBe(false);
	expect(validator.isWeakMap(null)).toBe(false);
	expect(validator.isWeakMap(1)).toBe(false);
	expect(validator.isWeakMap(true)).toBe(false);
	expect(validator.isWeakMap(Symbol())).toBe(false);
});
