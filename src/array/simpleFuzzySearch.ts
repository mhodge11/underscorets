import { fuzzySearchMatch } from "./fuzzySearch.ts";

/**
 * Test if a string matches a pattern for simple fuzzy searching.
 *
 * @private
 * @param pattern The search input string
 * @param str The string to match with the pattern
 * @returns True if the string matches the pattern, false otherwise
 */
export function simpleFuzzySearchTest(pattern: string, str: string) {
	return !!fuzzySearchMatch(pattern, str);
}

/**
 * Fuzzy search an array of strings.
 * It does not use a scoring system
 * and returns the matches in the order they appear in the array.
 *
 * *Based on [fuzzy-search](https://github.com/wouterrutgers/fuzzy-search).*
 *
 * @example
 * ```ts
 * simpleFuzzySearch("abc", ["abc", "acb", "bac", "bca", "cab", "cba"])
 * // => ["abc", "acb", "bac", "bca", "cab", "cba"]
 * ```
 *
 * @param pattern The search input string
 * @param array The array to search through
 * @returns An array of matches
 *
 * @category Array
 */
export function simpleFuzzySearch(pattern: string, array: string[]) {
	return array.filter((str) => simpleFuzzySearchTest(pattern, str));
}
