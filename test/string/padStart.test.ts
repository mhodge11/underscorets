import { padStart } from "@string/index.ts";

test("padStart a str", () => {
	expect(padStart("abc", 6)).toBe("   abc");
	expect(padStart("abc", 6, "_-")).toBe("_-_abc");
	expect(padStart("abc", 3)).toBe("abc");
	expect(padStart("abc", 2)).toBe("abc");
	expect(padStart("abc", 0)).toBe("abc");
});
