import { isArrayBuffer } from "@validate/index.ts";

test("return true if `value` is an array buffer", () => {
	expect(isArrayBuffer(new ArrayBuffer(2))).toBe(true);
});

test("return false if `value` is not an array buffer", () => {
	expect(isArrayBuffer([1, 2, 3])).toBe(false);
	expect(isArrayBuffer(Function)).toBe(false);
	expect(isArrayBuffer({})).toBe(false);
	expect(isArrayBuffer("abc")).toBe(false);
	expect(isArrayBuffer(undefined)).toBe(false);
	expect(isArrayBuffer(null)).toBe(false);
	expect(isArrayBuffer(1)).toBe(false);
	expect(isArrayBuffer(true)).toBe(false);
	expect(isArrayBuffer(Symbol())).toBe(false);
});
