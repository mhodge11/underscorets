import { endsWith } from "../../src/index.ts";

test("endsWith a str", () => {
	expect(endsWith("abc", "c")).toBe(true);
	expect(endsWith("abc", "b")).toBe(false);
	expect(endsWith("abc", "b", 2)).toBe(true);
	expect(endsWith("abc", "a", 2)).toBe(false);
	expect(endsWith("abc", "a", -3)).toBe(false);
	expect(endsWith("abc", "c", 10)).toBe(true);
});
