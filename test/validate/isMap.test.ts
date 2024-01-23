import { isMap } from "@validate/index.ts";

test("return true if `value` is a map", () => {
	expect(isMap(new Map())).toBe(true);
});

test("return false if `value` is not a map", () => {
	expect(isMap([1, 2, 3])).toBe(false);
	expect(isMap(Function)).toBe(false);
	expect(isMap({})).toBe(false);
	expect(isMap("abc")).toBe(false);
	expect(isMap(undefined)).toBe(false);
	expect(isMap(null)).toBe(false);
	expect(isMap(1)).toBe(false);
	expect(isMap(true)).toBe(false);
	expect(isMap(Symbol())).toBe(false);
});
