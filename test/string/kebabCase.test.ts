import { kebabCase } from "../../src/index.ts";

test("converts a str to kebab case", () => {
	expect(kebabCase("helloWorld")).toBe("hello-world");
	expect(kebabCase("helloCRUELWorld")).toBe("hello-cruel-world");
});

test("returns an empty str for an empty input", () => {
	expect(kebabCase("")).toBe("");
});

test("returns the original str for a single-word str", () => {
	expect(kebabCase("hello")).toBe("hello");
});
