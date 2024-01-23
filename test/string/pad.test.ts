import { pad } from "@string/index.ts";

test("should pad str", () => {
	expect(pad("abc", 8)).toBe("  abc   ");
	expect(pad("abc", 8, "_-")).toBe("_-abc_-_");
	expect(pad("abc", 3)).toBe("abc");
	expect(pad("abc", 2)).toBe("abc");
	expect(pad("abc", 0)).toBe("abc");
});
