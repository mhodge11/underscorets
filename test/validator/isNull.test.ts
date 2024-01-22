import { isNull } from "../../src/index.ts";

test("return true if `value` is null", () => {
	expect(isNull(null)).toBe(true);
});

test("return false if `value` is not null", () => {
	expect(isNull([1, 2, 3])).toBe(false);
	expect(isNull(Function)).toBe(false);
	expect(isNull({})).toBe(false);
	expect(isNull("abc")).toBe(false);
	expect(isNull(undefined)).toBe(false);
	expect(isNull(1)).toBe(false);
	expect(isNull(true)).toBe(false);
	expect(isNull(Symbol())).toBe(false);
});
