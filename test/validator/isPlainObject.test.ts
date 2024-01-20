import { validator } from "../../src/index.ts";

test("return true for plain objects", () => {
	expect(validator.isPlainObject({})).toBe(true);
	expect(validator.isPlainObject({ a: 1 })).toBe(true);
});

test("return false for non-plain objects", () => {
	expect(validator.isPlainObject(null)).toBe(false);
	expect(validator.isPlainObject("1")).toBe(false);
	expect(validator.isPlainObject([])).toBe(false);
	expect(validator.isPlainObject(new Function())).toBe(false);
	expect(validator.isPlainObject(new Date())).toBe(false);
});
