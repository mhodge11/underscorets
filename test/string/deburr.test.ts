import { str } from "../../src/index.ts";

test("removes diacritics from a str", () => {
	expect(str.deburr("Mëtàl Hëàd")).toEqual("Metal Head");
	expect(str.deburr("Pokémón")).toEqual("Pokemon");
	expect(str.deburr("résumé")).toEqual("resume");
});

test("returns the input str if it has no diacritics", () => {
	expect(str.deburr("hello")).toEqual("hello");
	expect(str.deburr("world")).toEqual("world");
	expect(str.deburr("")).toEqual("");
});
