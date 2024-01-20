import { str } from "../../src/index.ts";

test("should pad str", () => {
	expect(str.pad("abc", 8)).toBe("  abc   ");
	expect(str.pad("abc", 8, "_-")).toBe("_-abc_-_");
	expect(str.pad("abc", 3)).toBe("abc");
	expect(str.pad("abc", 2)).toBe("abc");
	expect(str.pad("abc", 0)).toBe("abc");
});
