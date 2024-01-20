import { str } from "../../src/index.ts";

test("convert a str to camel case", () => {
	expect(str.camelCase("Foo Bar")).toBe("fooBar");
	expect(str.camelCase("fooBar")).toBe("fooBar");
	expect(str.camelCase("FooBar")).toBe("fooBar");
	expect(str.camelCase("--foo-bar--")).toBe("fooBar");
	expect(str.camelCase("__FOO_BAR__")).toBe("fooBar");
	expect(str.camelCase("")).toBe("");
});
