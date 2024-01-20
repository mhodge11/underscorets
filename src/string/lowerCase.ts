import { reQuotes } from "../config/regex.ts";
import { toString } from "../util/toString.ts";
import { splitWords } from "./splitWords.ts";

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
export const lowerCase = (string: string): string =>
	splitWords(toString(string).replace(reQuotes, "")).reduce(
		(result, word, index) => result + (index ? " " : "") + word.toLowerCase(),
		"",
	);
