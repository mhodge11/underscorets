import { str } from "../../src/index.ts";

test("escapes special characters in a str", () => {
	expect(str.escapeRegExp("hello.world*")).toBe("hello\\.world\\*");
	expect(str.escapeRegExp("[lodash](https://lodash.com/)")).toBe(
		"\\[lodash\\]\\(https://lodash\\.com/\\)",
	);
});

test("returns an empty str for an empty input", () => {
	expect(str.escapeRegExp("")).toBe("");
});

test("returns the original str for a str without special characters", () => {
	expect(str.escapeRegExp("hello world")).toBe("hello world");
});
