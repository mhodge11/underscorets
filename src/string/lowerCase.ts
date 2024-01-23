import { toString } from "../misc/toString.js";
import { splitWords } from "./splitWords.js";

/**
 * Converts `string`, as space separated words, to lower case.
 *
 * @example
 * ```ts
 * lowerCase("--Foo-Bar--")
 * // => "foo bar"
 *
 * lowerCase("fooBar")
 * // => "foo bar"
 *
 * lowerCase("__FOO_BAR__")
 * // => "foo bar"
 * ```
 *
 * @param string The string to convert
 * @returns The lower cased string
 *
 * @category String
 */
export function lowerCase(string: string): string {
	return splitWords(toString(string).replace(/['\u2019]/g, "")).reduce(
		(result, word, index) => result + (index ? " " : "") + word.toLowerCase(),
		"",
	);
}
