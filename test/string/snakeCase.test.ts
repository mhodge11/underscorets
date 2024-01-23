import { snakeCase } from "@string/index.ts";

test("converts a str to snake_case", () => {
	expect(snakeCase("someString")).toBe("some_string");
	expect(snakeCase("someOtherString")).toBe("some_other_string");
	expect(snakeCase("someStringWithCamelCase")).toBe(
		"some_string_with_camel_case",
	);
	expect(snakeCase("someCRUELWorld")).toBe("some_cruel_world");
});

test("handles strings that are already in snake_case", () => {
	expect(snakeCase("some_string")).toBe("some_string");
});

test("handles empty strings", () => {
	expect(snakeCase("")).toBe("");
});
