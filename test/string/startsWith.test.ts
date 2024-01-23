import { startsWith } from "@string/index.ts";

test("startsWith a str", () => {
	expect(startsWith("abc", "a")).toBe(true);
	expect(startsWith("abc", "b")).toBe(false);
	expect(startsWith("abc", "b", 1)).toBe(true);
	expect(startsWith("abc", "ab")).toBe(true);
	expect(startsWith("abc", "a", 2)).toBe(false);
	expect(startsWith("abc", "a", -3)).toBe(true);
	expect(startsWith("abc", "c", 10)).toBe(false);
});
