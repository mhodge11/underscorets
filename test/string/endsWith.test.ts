import { str } from "../../src/index.ts";

test("str.endsWith a str", () => {
	expect(str.endsWith("abc", "c")).toBe(true);
	expect(str.endsWith("abc", "b")).toBe(false);
	expect(str.endsWith("abc", "b", 2)).toBe(true);
	expect(str.endsWith("abc", "a", 2)).toBe(false);
	expect(str.endsWith("abc", "a", -3)).toBe(false);
	expect(str.endsWith("abc", "c", 10)).toBe(true);
});
