import { isSet } from "../../src/index.ts";

test("return true if `value` is a set", () => {
	expect(isSet(new Set())).toBe(true);
});

test("return false if `value` is not a set", () => {
	expect(isSet([1, 2, 3])).toBe(false);
	expect(isSet(Function)).toBe(false);
	expect(isSet({})).toBe(false);
	expect(isSet("abc")).toBe(false);
	expect(isSet(undefined)).toBe(false);
	expect(isSet(null)).toBe(false);
	expect(isSet(1)).toBe(false);
	expect(isSet(true)).toBe(false);
	expect(isSet(Symbol())).toBe(false);
});
