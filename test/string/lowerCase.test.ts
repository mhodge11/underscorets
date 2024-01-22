import { lowerCase } from "../../src/index.ts";

test("should lowercase as space-separated words", () => {
	expect(lowerCase("--Foo-Bar--")).toBe("foo bar");
	expect(lowerCase("fooBar")).toBe("foo bar");
	expect(lowerCase("__FOO_BAR__")).toBe("foo bar");
});
