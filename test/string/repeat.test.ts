import { MAX_SAFE_INTEGER } from "../../src/config/constants.ts";
import { repeat } from "../../src/index.ts";

test("repeat a str", () => {
	expect(repeat("*", 3)).toBe("***");
	expect(repeat("abc", 2)).toBe("abcabc");
	expect(repeat("", 2)).toBe("");
	expect(repeat("abc", 0)).toBe("");
	expect(repeat("abc", -1)).toBe("");
	expect(repeat("abc", 1)).toBe("abc");
	expect(repeat("abc", MAX_SAFE_INTEGER + 1)).toBe("");
});
