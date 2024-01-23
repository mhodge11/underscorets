import { deburr } from "@string/index.ts";

test("removes diacritics from a str", () => {
	expect(deburr("Mëtàl Hëàd")).toEqual("Metal Head");
	expect(deburr("Pokémón")).toEqual("Pokemon");
	expect(deburr("résumé")).toEqual("resume");
});

test("returns the input str if it has no diacritics", () => {
	expect(deburr("hello")).toEqual("hello");
	expect(deburr("world")).toEqual("world");
	expect(deburr("")).toEqual("");
});
