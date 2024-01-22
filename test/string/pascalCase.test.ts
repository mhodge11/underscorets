import { pascalCase } from "../../src/index.ts";

test("converts a str to PascalCase", () => {
	expect(pascalCase("hello world")).toEqual("HelloWorld");
	expect(pascalCase("this is a.test")).toEqual("ThisIsATest");
	expect(pascalCase("camelCase")).toEqual("CamelCase");
});

test("handles empty strings and single words correctly", () => {
	expect(pascalCase("")).toEqual("");
	expect(pascalCase("hello")).toEqual("Hello");
});
