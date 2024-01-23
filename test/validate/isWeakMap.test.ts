import { isWeakMap } from "@validate/index.ts";

test("return true if `value` is a weak map", () => {
	expect(isWeakMap(new WeakMap())).toBe(true);
});

test("return false if `value` is not a weak map", () => {
	expect(isWeakMap([1, 2, 3])).toBe(false);
	expect(isWeakMap(Function)).toBe(false);
	expect(isWeakMap({})).toBe(false);
	expect(isWeakMap("abc")).toBe(false);
	expect(isWeakMap(undefined)).toBe(false);
	expect(isWeakMap(null)).toBe(false);
	expect(isWeakMap(1)).toBe(false);
	expect(isWeakMap(true)).toBe(false);
	expect(isWeakMap(Symbol())).toBe(false);
});
