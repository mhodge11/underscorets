import { validator } from "../../src/index.ts";

afterEach(() => {
	vi.unstubAllGlobals();
});

test("return true if `value` is a weak set", () => {
	expect(validator.isWeakSet(new WeakSet())).toBe(true);
});

test("return false if `value` is not a weak set", () => {
	expect(validator.isWeakSet([1, 2, 3])).toBe(false);
	expect(validator.isWeakSet(Function)).toBe(false);
	expect(validator.isWeakSet({})).toBe(false);
	expect(validator.isWeakSet("abc")).toBe(false);
	expect(validator.isWeakSet(undefined)).toBe(false);
	expect(validator.isWeakSet(null)).toBe(false);
	expect(validator.isWeakSet(1)).toBe(false);
	expect(validator.isWeakSet(true)).toBe(false);
	expect(validator.isWeakSet(Symbol())).toBe(false);
});

test("return true if `value` is a weak set and types doesn't exist", () => {
	vi.stubGlobal("types", null);

	expect(validator.isWeakSet(new WeakSet())).toBe(true);
});
