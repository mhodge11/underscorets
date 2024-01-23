import { isWeakSet } from "@validate/index.ts";

afterEach(() => {
	vi.unstubAllGlobals();
});

test("return true if `value` is a weak set", () => {
	expect(isWeakSet(new WeakSet())).toBe(true);
});

test("return false if `value` is not a weak set", () => {
	expect(isWeakSet([1, 2, 3])).toBe(false);
	expect(isWeakSet(Function)).toBe(false);
	expect(isWeakSet({})).toBe(false);
	expect(isWeakSet("abc")).toBe(false);
	expect(isWeakSet(undefined)).toBe(false);
	expect(isWeakSet(null)).toBe(false);
	expect(isWeakSet(1)).toBe(false);
	expect(isWeakSet(true)).toBe(false);
	expect(isWeakSet(Symbol())).toBe(false);
});

test("return true if `value` is a weak set and types doesn't exist", () => {
	vi.stubGlobal("types", null);

	expect(isWeakSet(new WeakSet())).toBe(true);
});
