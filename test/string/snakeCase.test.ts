import { str } from "../../src/index.ts";

test("converts a str to snake_case", () => {
	expect(str.snakeCase("someString")).toBe("some_string");
	expect(str.snakeCase("someOtherString")).toBe("some_other_string");
	expect(str.snakeCase("someStringWithCamelCase")).toBe(
		"some_string_with_camel_case",
	);
	expect(str.snakeCase("someCRUELWorld")).toBe("some_cruel_world");
});

test("handles strings that are already in snake_case", () => {
	expect(str.snakeCase("some_string")).toBe("some_string");
});

test("handles empty strings", () => {
	expect(str.snakeCase("")).toBe("");
});
