import { escapeHtml } from "../../src/index.ts";

test("escape special characters to HTML entities", () => {
	const string = "<p>Hello, World!</p>";
	const html = escapeHtml(string);
	expect(html).toBe("&lt;p&gt;Hello, World!&lt;/p&gt;");
});

test("return the original str if it does not contain special characters", () => {
	const string = "Hello, World!";
	const html = escapeHtml(string);
	expect(html).toBe(string);
});
