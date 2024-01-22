import { simpleFuzzySearchTest } from "../../src/array/simpleFuzzySearch.ts";
import { simpleFuzzySearch } from "../../src/index.ts";

test("simpleFuzzySearchTest should return true when fuzzy match", () => {
	expect(simpleFuzzySearchTest("back", "imaback")).toBeTruthy();
	expect(simpleFuzzySearchTest("back", "bakck")).toBeTruthy();
	expect(simpleFuzzySearchTest("shig", "osh kosh modkhigow")).toBeTruthy();
	expect(simpleFuzzySearchTest("", "osh kosh modkhigow")).toBeTruthy();
});

test("simpleFuzzySearchTest should return false when no fuzzy match", () => {
	expect(simpleFuzzySearchTest("back", "abck")).toBeFalsy();
	expect(simpleFuzzySearchTest("okmgk", "osh kosh modkhigow")).toBeFalsy();
});

test("simpleFuzzySearch should filter the elements of a string array", () => {
	expect(simpleFuzzySearch("a", ["a"])).toStrictEqual(["a"]);
	expect(simpleFuzzySearch("ab", ["aba", "c", "cacb"])).toStrictEqual([
		"aba",
		"cacb",
	]);
});
