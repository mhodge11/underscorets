import { isBuffer } from "../../src/index.ts";

test("return true if `value` is a buffer", () => {
	expect(isBuffer(Buffer.alloc(2))).toBe(true);
});

test("return false if `value` is not a buffer", () => {
	expect(isBuffer([1, 2, 3])).toBe(false);
	expect(isBuffer(Function)).toBe(false);
	expect(isBuffer({})).toBe(false);
	expect(isBuffer("abc")).toBe(false);
	expect(isBuffer(undefined)).toBe(false);
	expect(isBuffer(null)).toBe(false);
	expect(isBuffer(1)).toBe(false);
	expect(isBuffer(true)).toBe(false);
	expect(isBuffer(Symbol())).toBe(false);
});
