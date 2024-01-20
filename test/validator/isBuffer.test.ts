import { validator } from "../../src/index.ts";

test("return true if `value` is a buffer", () => {
	expect(validator.isBuffer(Buffer.alloc(2))).toBe(true);
});

test("return false if `value` is not a buffer", () => {
	expect(validator.isBuffer([1, 2, 3])).toBe(false);
	expect(validator.isBuffer(Function)).toBe(false);
	expect(validator.isBuffer({})).toBe(false);
	expect(validator.isBuffer("abc")).toBe(false);
	expect(validator.isBuffer(undefined)).toBe(false);
	expect(validator.isBuffer(null)).toBe(false);
	expect(validator.isBuffer(1)).toBe(false);
	expect(validator.isBuffer(true)).toBe(false);
	expect(validator.isBuffer(Symbol())).toBe(false);
});
