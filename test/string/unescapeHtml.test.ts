import { str } from "../../src/index.ts";

test("unescape HTML entities", () => {
	const html = "&lt;p&gt;Hello, World!&lt;/p&gt;";
	const string = str.unescapeHtml(html);
	expect(string).toBe("<p>Hello, World!</p>");
});

test("return the original str if it does not contain HTML entities", () => {
	const html = "Hello, World!";
	const string = str.unescapeHtml(html);
	expect(string).toBe(html);
});
