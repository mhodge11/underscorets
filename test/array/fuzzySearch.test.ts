import { array } from "../../src/index.ts";

test("array.simpleFuzzySearchTest should return true when fuzzy match", () => {
	expect(array.simpleFuzzySearchTest("back", "imaback")).toBeTruthy();
	expect(array.simpleFuzzySearchTest("back", "bakck")).toBeTruthy();
	expect(
		array.simpleFuzzySearchTest("shig", "osh kosh modkhigow"),
	).toBeTruthy();
	expect(array.simpleFuzzySearchTest("", "osh kosh modkhigow")).toBeTruthy();
});

test("array.simpleFuzzySearchTest should return false when no fuzzy match", () => {
	expect(array.simpleFuzzySearchTest("back", "abck")).toBeFalsy();
	expect(
		array.simpleFuzzySearchTest("okmgk", "osh kosh modkhigow"),
	).toBeFalsy();
});

test("array.simpleFuzzySearch should filter the elements of a string array", () => {
	expect(array.simpleFuzzySearch("a", ["a"])).toStrictEqual(["a"]);
	expect(array.simpleFuzzySearch("ab", ["aba", "c", "cacb"])).toStrictEqual([
		"aba",
		"cacb",
	]);
});

test("array.fuzzySearchMatch should return the rendered string and match score", () => {
	const match = array.fuzzySearchMatch("ab", "ZaZbZ", { pre: "<", post: ">" });
	expect(match?.result).toBe("Z<a>Z<b>Z");
	expect(match).toHaveProperty("score");
});

test("array.fuzzySearchMatch should not require a template, returning the string as is", () => {
	expect(array.fuzzySearchMatch("ab", "ZaZbZ")?.result).toBe("ZaZbZ");
});

test("array.fuzzySearchMatch should return null on no match", () => {
	expect(array.fuzzySearchMatch("ZEBRA!", "ZaZbZ")).toBeNull();
});

test("array.fuzzySearchMatch should return a greater score for consecutive matches of pattern", () => {
	const consecutiveScore = array.fuzzySearchMatch("abcd", "zabcd")?.score;
	const scatteredScore = array.fuzzySearchMatch("abcd", "azbcd")?.score;
	expect(consecutiveScore).toBeGreaterThan(scatteredScore as number);
});

test("array.fuzzySearchMatch should take an ignoreCase parameter", () => {
	const opts = { caseSensitive: true };
	expect(array.fuzzySearchMatch("Ab", "aB", opts)).toBeNull();

	opts.caseSensitive = false;
	expect(array.fuzzySearchMatch("AB", "AB", opts)).toBeTruthy();
});

test("array.fuzzySearch should be case insensitive by default", () => {
	expect(array.fuzzySearch("a", ["A"])?.[0]?.string).toBe("A");
});

test("array.fuzzySearch should return an empty array when the array is empty", () => {
	const result = array.fuzzySearch("pattern", []);
	expect(result).toStrictEqual([]);
});

test("array.fuzzySearch should return the index and matching array elements", () => {
	const result = array.fuzzySearch("ab", ["aba", "c", "cacb"]);
	expect(result).toHaveLength(2);

	expect(result[0]?.string).toBe("aba");
	expect(result[0]?.index).toBe(0);
	expect(result[0]).toHaveProperty("score");

	expect(result[1]?.string).toBe("cacb");
	expect(result[1]?.index).toBe(2);
	expect(result[1]).toHaveProperty("score");
});

test("array.fuzzySearch should use optional template stringing to wrap each element", () => {
	const result = array.fuzzySearch("a", ["a"], {
		pre: "tah",
		post: "zah!",
	})[0]?.string;
	expect(result).toBe("tahazah!");

	const result1 = array.fuzzySearch("ab", ["cacbc"], {
		pre: "<",
		post: ">",
	})[0]?.string;
	expect(result1).toBe("c<a>c<b>c");
});

test("array.fuzzySearch should use optional func to get string out of array entry", () => {
	const arr = [{ arg: "hizzahpooslahp" }, { arg: "arppg" }];
	expect(
		array.fuzzySearch("poop", arr, {
			extract: (original) => original.arg,
		})[0]?.string,
	).toBe("hizzahpooslahp");
});

test("array.fuzzySearch should return list untouched when given empty pattern", () => {
	// array needs to be over size 10: V8 has stable sort with < 10 elements,
	// unstable with > 10 elements
	const arr = "abcdefghjklmnop".split("");
	const results = array.fuzzySearch("", arr).map((item) => item.string);
	expect(results).toStrictEqual(arr);
});

test("array.fuzzySearch should weight exact matches the highest", () => {
	// array needs to be over size 10: V8 has stable sort with < 10 elements,
	// unstable with > 10 elements
	const searchString = "go";
	const arr = "abcdefghjklmnop"
		.split("")
		.map((item) => `${item}oo`)
		.concat(["good", "go", "goofgo", "ogo"]);
	const results = array
		.fuzzySearch(searchString, arr)
		.map((item) => item.string);
	expect(results[0]).toBe(searchString);
});
