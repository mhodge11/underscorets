import { isArguments } from "@validate/index.ts";
import { args } from "./__mocks__.ts";

test("return true if `value` is an arguments object", () => {
	expect(isArguments(args)).toBe(true);
});

test("return false if `value` is not an arguments object", () => {
	expect(isArguments([1, 2, 3])).toBe(false);
	expect(isArguments(Function)).toBe(false);
	expect(isArguments({})).toBe(false);
	expect(isArguments("abc")).toBe(false);
	expect(isArguments(undefined)).toBe(false);
	expect(isArguments(null)).toBe(false);
	expect(isArguments(1)).toBe(false);
	expect(isArguments(true)).toBe(false);
	expect(isArguments(Symbol())).toBe(false);
});
