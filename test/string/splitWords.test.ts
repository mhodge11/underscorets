import { splitWords } from "../../src/index.ts";

test("split camelCase into two words", () => {
	expect(splitWords("camelCase")).toEqual(["camel", "Case"]);
});

test("split PascalCase into two words", () => {
	expect(splitWords("PascalCase")).toEqual(["Pascal", "Case"]);
});

test("split a str with non-alphanumeric characters into multiple words", () => {
	expect(splitWords("hello_world-123")).toEqual(["hello", "world", "123"]);
});

test("uppercase words are split correctly", () => {
	expect(splitWords("HelloCRUELWorld")).toEqual(["Hello", "CRUEL", "World"]);
	expect(splitWords("enable6HFormat")).toEqual(["enable", "6", "H", "Format"]);
});

test("return an empty array for an empty str", () => {
	expect(splitWords("")).toEqual([]);
});

test("return an array with one element for a single word str", () => {
	expect(splitWords("hello")).toEqual(["hello"]);
});

test("return an array of words based on compounds", () => {
	expect(splitWords("12ft")).toEqual(["12", "ft"]);
	expect(splitWords("aeiouAreVowels")).toEqual(["aeiou", "Are", "Vowels"]);
	expect(splitWords("enable 6h format")).toEqual([
		"enable",
		"6",
		"h",
		"format",
	]);
	expect(splitWords("enable 24H format")).toEqual([
		"enable",
		"24",
		"H",
		"format",
	]);
	expect(splitWords("isISO8601")).toEqual(["is", "ISO", "8601"]);
	expect(splitWords("LETTERSAeiouAreVowels")).toEqual([
		"LETTERS",
		"Aeiou",
		"Are",
		"Vowels",
	]);
	expect(splitWords("tooLegit2Quit")).toEqual(["too", "Legit", "2", "Quit"]);
	expect(splitWords("walk500Miles")).toEqual(["walk", "500", "Miles"]);
	expect(splitWords("xhr2Request")).toEqual(["xhr", "2", "Request"]);
	expect(splitWords("XMLHttp")).toEqual(["XML", "Http"]);
	expect(splitWords("XmlHTTP")).toEqual(["Xml", "HTTP"]);
	expect(splitWords("XmlHttp")).toEqual(["Xml", "Http"]);
});

test("should work with compound words containing diacritical marks", () => {
	expect(splitWords("LETTERSÆiouAreVowels")).toEqual([
		"LETTERS",
		"Æiou",
		"Are",
		"Vowels",
	]);
	expect(splitWords("æiouAreVowels")).toEqual(["æiou", "Are", "Vowels"]);
	expect(splitWords("æiou2Consonants")).toEqual(["æiou", "2", "Consonants"]);
});

test("should support a `pattern`", () => {
	expect(splitWords("abcd", /ab|cd/g)).toEqual(["ab", "cd"]);
	expect(Array.from(splitWords("abcd", "ab|cd"))).toEqual(["ab"]);
});
