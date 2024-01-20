import { str } from "../../src/index.ts";

test("converts a str to PascalCase", () => {
	expect(str.pascalCase("hello world")).toEqual("HelloWorld");
	expect(str.pascalCase("this is a.test")).toEqual("ThisIsATest");
	expect(str.pascalCase("camelCase")).toEqual("CamelCase");
});

test("handles empty strings and single words correctly", () => {
	expect(str.pascalCase("")).toEqual("");
	expect(str.pascalCase("hello")).toEqual("Hello");
});
