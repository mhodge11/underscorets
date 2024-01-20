import { str } from "../../src/index.ts";

test("Replace last occurrence of a str", () => {
	expect(str.replaceLast("Foo Bar Bar", "Bar", "Boo")).toBe("Foo Bar Boo");
});

test("Return the original str if the search str is not found", () => {
	expect(str.replaceLast("Foo Bar Bar", "Baz", "Boo")).toBe("Foo Bar Bar");
	expect(str.replaceLast("", "Baz", "Boo")).toBe("");
});
