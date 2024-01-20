import { str } from "../../src/index.ts";

test("str.padEnd a str", () => {
	expect(str.padEnd("abc", 6)).toBe("abc   ");
	expect(str.padEnd("abc", 6, "_-")).toBe("abc_-_");
	expect(str.padEnd("abc", 3)).toBe("abc");
	expect(str.padEnd("abc", 2)).toBe("abc");
	expect(str.padEnd("abc", 0)).toBe("abc");
});
