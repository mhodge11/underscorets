import { MAX_SAFE_INTEGER } from "../../src/config/constants.ts";
import { str } from "../../src/index.ts";

test("str.repeat a str", () => {
	expect(str.repeat("*", 3)).toBe("***");
	expect(str.repeat("abc", 2)).toBe("abcabc");
	expect(str.repeat("", 2)).toBe("");
	expect(str.repeat("abc", 0)).toBe("");
	expect(str.repeat("abc", -1)).toBe("");
	expect(str.repeat("abc", 1)).toBe("abc");
	expect(str.repeat("abc", MAX_SAFE_INTEGER + 1)).toBe("");
});
