import { padEnd } from "../../src/index.ts";

test("padEnd a str", () => {
	expect(padEnd("abc", 6)).toBe("abc   ");
	expect(padEnd("abc", 6, "_-")).toBe("abc_-_");
	expect(padEnd("abc", 3)).toBe("abc");
	expect(padEnd("abc", 2)).toBe("abc");
	expect(padEnd("abc", 0)).toBe("abc");
});
