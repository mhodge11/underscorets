import { str } from "../../src/index.ts";

test("should lowercase as space-separated words", () => {
	expect(str.lowerCase("--Foo-Bar--")).toBe("foo bar");
	expect(str.lowerCase("fooBar")).toBe("foo bar");
	expect(str.lowerCase("__FOO_BAR__")).toBe("foo bar");
});
