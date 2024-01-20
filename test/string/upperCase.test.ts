import { str } from "../../src/index.ts";

test("should uppercase as space-separated words", () => {
	expect(str.upperCase("--foo-bar--")).toBe("FOO BAR");
	expect(str.upperCase("fooBar")).toBe("FOO BAR");
	expect(str.upperCase("__foo_bar__")).toBe("FOO BAR");
});
