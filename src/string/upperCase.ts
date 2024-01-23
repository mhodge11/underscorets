import { reQuotes } from "../config/regex.ts";
import { toString } from "../misc/toString.ts";
import { splitWords } from "./splitWords.ts";

/**
 * Converts `string`, as space separated words, to upper case.
 *
 * @example
 * ```ts
 * upperCase("--foo-bar--")
 * // => "FOO BAR"
 *
 * upperCase("fooBar")
 * // => "FOO BAR"
 *
 * upperCase("__foo_bar__")
 * // => "FOO BAR"
 * ```
 *
 * @param string The string to convert
 * @returns The upper cased string
 *
 * @category String
 */
export function upperCase(string: string): string {
	return splitWords(toString(string).replace(reQuotes, "")).reduce(
		(result, word, index) => result + (index ? " " : "") + word.toUpperCase(),
		"",
	);
}
