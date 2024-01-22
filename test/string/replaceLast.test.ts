import { replaceLast } from "../../src/index.ts";

test("Replace last occurrence of a str", () => {
	expect(replaceLast("Foo Bar Bar", "Bar", "Boo")).toBe("Foo Bar Boo");
});

test("Return the original str if the search str is not found", () => {
	expect(replaceLast("Foo Bar Bar", "Baz", "Boo")).toBe("Foo Bar Bar");
	expect(replaceLast("", "Baz", "Boo")).toBe("");
});
