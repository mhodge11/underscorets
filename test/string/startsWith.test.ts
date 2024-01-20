import { str } from "../../src/index.ts";

test("str.startsWith a str", () => {
	expect(str.startsWith("abc", "a")).toBe(true);
	expect(str.startsWith("abc", "b")).toBe(false);
	expect(str.startsWith("abc", "b", 1)).toBe(true);
	expect(str.startsWith("abc", "ab")).toBe(true);
	expect(str.startsWith("abc", "a", 2)).toBe(false);
	expect(str.startsWith("abc", "a", -3)).toBe(true);
	expect(str.startsWith("abc", "c", 10)).toBe(false);
});
