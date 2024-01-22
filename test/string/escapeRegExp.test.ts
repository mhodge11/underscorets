import { escapeRegExp } from "../../src/index.ts";

test("escapes special characters in a str", () => {
	expect(escapeRegExp("hello.world*")).toBe("hello\\.world\\*");
	expect(escapeRegExp("[lodash](https://lodash.com/)")).toBe(
		"\\[lodash\\]\\(https://lodash\\.com/\\)",
	);
});

test("returns an empty str for an empty input", () => {
	expect(escapeRegExp("")).toBe("");
});

test("returns the original str for a str without special characters", () => {
	expect(escapeRegExp("hello world")).toBe("hello world");
});
