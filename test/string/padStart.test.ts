import { str } from "../../src/index.ts";

test("str.padStart a str", () => {
	expect(str.padStart("abc", 6)).toBe("   abc");
	expect(str.padStart("abc", 6, "_-")).toBe("_-_abc");
	expect(str.padStart("abc", 3)).toBe("abc");
	expect(str.padStart("abc", 2)).toBe("abc");
	expect(str.padStart("abc", 0)).toBe("abc");
});
