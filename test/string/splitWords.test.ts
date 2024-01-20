import { str } from "../../src/index.ts";

test("split camelCase into two words", () => {
	expect(str.splitWords("camelCase")).toEqual(["camel", "Case"]);
});

test("split PascalCase into two words", () => {
	expect(str.splitWords("PascalCase")).toEqual(["Pascal", "Case"]);
});

test("split a str with non-alphanumeric characters into multiple words", () => {
	expect(str.splitWords("hello_world-123")).toEqual(["hello", "world", "123"]);
});

test("uppercase words are split correctly", () => {
	expect(str.splitWords("HelloCRUELWorld")).toEqual([
		"Hello",
		"CRUEL",
		"World",
	]);
	expect(str.splitWords("enable6HFormat")).toEqual([
		"enable",
		"6",
		"H",
		"Format",
	]);
});

test("return an empty array for an empty str", () => {
	expect(str.splitWords("")).toEqual([]);
});

test("return an array with one element for a single word str", () => {
	expect(str.splitWords("hello")).toEqual(["hello"]);
});

test("return an array of words based on compounds", () => {
	expect(str.splitWords("12ft")).toEqual(["12", "ft"]);
	expect(str.splitWords("aeiouAreVowels")).toEqual(["aeiou", "Are", "Vowels"]);
	expect(str.splitWords("enable 6h format")).toEqual([
		"enable",
		"6",
		"h",
		"format",
	]);
	expect(str.splitWords("enable 24H format")).toEqual([
		"enable",
		"24",
		"H",
		"format",
	]);
	expect(str.splitWords("isISO8601")).toEqual(["is", "ISO", "8601"]);
	expect(str.splitWords("LETTERSAeiouAreVowels")).toEqual([
		"LETTERS",
		"Aeiou",
		"Are",
		"Vowels",
	]);
	expect(str.splitWords("tooLegit2Quit")).toEqual([
		"too",
		"Legit",
		"2",
		"Quit",
	]);
	expect(str.splitWords("walk500Miles")).toEqual(["walk", "500", "Miles"]);
	expect(str.splitWords("xhr2Request")).toEqual(["xhr", "2", "Request"]);
	expect(str.splitWords("XMLHttp")).toEqual(["XML", "Http"]);
	expect(str.splitWords("XmlHTTP")).toEqual(["Xml", "HTTP"]);
	expect(str.splitWords("XmlHttp")).toEqual(["Xml", "Http"]);
});

test("should work with compound words containing diacritical marks", () => {
	expect(str.splitWords("LETTERSÆiouAreVowels")).toEqual([
		"LETTERS",
		"Æiou",
		"Are",
		"Vowels",
	]);
	expect(str.splitWords("æiouAreVowels")).toEqual(["æiou", "Are", "Vowels"]);
	expect(str.splitWords("æiou2Consonants")).toEqual([
		"æiou",
		"2",
		"Consonants",
	]);
});

test("should support a `pattern`", () => {
	expect(str.splitWords("abcd", /ab|cd/g)).toEqual(["ab", "cd"]);
	expect(Array.from(str.splitWords("abcd", "ab|cd"))).toEqual(["ab"]);
});
