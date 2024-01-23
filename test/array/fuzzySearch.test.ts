import { fuzzySearchMatch } from "@array/fuzzySearch.ts";
import { fuzzySearch } from "@array/index.ts";

test("fuzzySearchMatch should return the rendered string and match score", () => {
	const match = fuzzySearchMatch("ab", "ZaZbZ", { pre: "<", post: ">" });
	expect(match?.result).toBe("Z<a>Z<b>Z");
	expect(match).toHaveProperty("score");
});

test("fuzzySearchMatch should not require a template, returning the string as is", () => {
	expect(fuzzySearchMatch("ab", "ZaZbZ")?.result).toBe("ZaZbZ");
});

test("fuzzySearchMatch should return null on no match", () => {
	expect(fuzzySearchMatch("ZEBRA!", "ZaZbZ")).toBeNull();
});

test("fuzzySearchMatch should return a greater score for consecutive matches of pattern", () => {
	const consecutiveScore = fuzzySearchMatch("abcd", "zabcd")?.score;
	const scatteredScore = fuzzySearchMatch("abcd", "azbcd")?.score;
	expect(consecutiveScore).toBeGreaterThan(scatteredScore as number);
});

test("fuzzySearchMatch should take an ignoreCase parameter", () => {
	const opts = { caseSensitive: true };
	expect(fuzzySearchMatch("Ab", "aB", opts)).toBeNull();

	opts.caseSensitive = false;
	expect(fuzzySearchMatch("AB", "AB", opts)).toBeTruthy();
});

test("fuzzySearch should be case insensitive by default", () => {
	expect(fuzzySearch("a", ["A"])?.[0]?.string).toBe("A");
});

test("fuzzySearch should return an empty array when the array is empty", () => {
	const result = fuzzySearch("pattern", []);
	expect(result).toStrictEqual([]);
});

test("fuzzySearch should return the index and matching array elements", () => {
	const result = fuzzySearch("ab", ["aba", "c", "cacb"]);
	expect(result).toHaveLength(2);

	expect(result[0]?.string).toBe("aba");
	expect(result[0]?.index).toBe(0);
	expect(result[0]).toHaveProperty("score");

	expect(result[1]?.string).toBe("cacb");
	expect(result[1]?.index).toBe(2);
	expect(result[1]).toHaveProperty("score");
});

test("fuzzySearch should use optional template stringing to wrap each element", () => {
	const result = fuzzySearch("a", ["a"], {
		pre: "tah",
		post: "zah!",
	})[0]?.string;
	expect(result).toBe("tahazah!");

	const result1 = fuzzySearch("ab", ["cacbc"], {
		pre: "<",
		post: ">",
	})[0]?.string;
	expect(result1).toBe("c<a>c<b>c");
});

test("fuzzySearch should use optional func to get string out of array entry", () => {
	const arr = [{ arg: "hizzahpooslahp" }, { arg: "arppg" }];
	expect(
		fuzzySearch("poop", arr, {
			extract: (original) => original.arg,
		})[0]?.string,
	).toBe("hizzahpooslahp");
});

test("fuzzySearch should return list untouched when given empty pattern", () => {
	// array needs to be over size 10: V8 has stable sort with < 10 elements,
	// unstable with > 10 elements
	const arr = "abcdefghjklmnop".split("");
	const results = fuzzySearch("", arr).map((item) => item.string);
	expect(results).toStrictEqual(arr);
});

test("fuzzySearch should weight exact matches the highest", () => {
	// array needs to be over size 10: V8 has stable sort with < 10 elements,
	// unstable with > 10 elements
	const searchString = "go";
	const arr = "abcdefghjklmnop"
		.split("")
		.map((item) => `${item}oo`)
		.concat(["good", "go", "goofgo", "ogo"]);
	const results = fuzzySearch(searchString, arr).map((item) => item.string);
	expect(results[0]).toBe(searchString);
});
