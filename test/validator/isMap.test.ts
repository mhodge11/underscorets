import { validator } from "../../src/index.ts";

test("return true if `value` is a map", () => {
	expect(validator.isMap(new Map())).toBe(true);
});

test("return false if `value` is not a map", () => {
	expect(validator.isMap([1, 2, 3])).toBe(false);
	expect(validator.isMap(Function)).toBe(false);
	expect(validator.isMap({})).toBe(false);
	expect(validator.isMap("abc")).toBe(false);
	expect(validator.isMap(undefined)).toBe(false);
	expect(validator.isMap(null)).toBe(false);
	expect(validator.isMap(1)).toBe(false);
	expect(validator.isMap(true)).toBe(false);
	expect(validator.isMap(Symbol())).toBe(false);
});
