import { validator } from "../../src/index.ts";
import { args } from "./__mocks__.ts";

test("return true if `value` is an arguments object", () => {
	expect(validator.isArguments(args)).toBe(true);
});

test("return false if `value` is not an arguments object", () => {
	expect(validator.isArguments([1, 2, 3])).toBe(false);
	expect(validator.isArguments(Function)).toBe(false);
	expect(validator.isArguments({})).toBe(false);
	expect(validator.isArguments("abc")).toBe(false);
	expect(validator.isArguments(undefined)).toBe(false);
	expect(validator.isArguments(null)).toBe(false);
	expect(validator.isArguments(1)).toBe(false);
	expect(validator.isArguments(true)).toBe(false);
	expect(validator.isArguments(Symbol())).toBe(false);
});
