import { str } from "../../src/index.ts";

test("converts a str to kebab case", () => {
	expect(str.kebabCase("helloWorld")).toBe("hello-world");
	expect(str.kebabCase("helloCRUELWorld")).toBe("hello-cruel-world");
});

test("returns an empty str for an empty input", () => {
	expect(str.kebabCase("")).toBe("");
});

test("returns the original str for a single-word str", () => {
	expect(str.kebabCase("hello")).toBe("hello");
});
