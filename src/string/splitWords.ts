import { asciiWords } from "../helpers/asciiWords.ts";
import { unicodeWords } from "../helpers/unicodeWords.ts";

const hasUnicodeWord = RegExp.prototype.test.bind(
	/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
);

/**
 * Split a string into words. Can deal with camelCase, PascalCase & snake_case.
 *
 * @example
 * ```ts
 * splitWords('fred, barney, & pebbles')
 * // => ['fred', 'barney', 'pebbles']
 *
 * splitWords('fred, barney, & pebbles', /[^, ]+/g)
 * // => ['fred', 'barney', '&', 'pebbles']
 * ```
 *
 * @param string The string to split into words
 * @param pattern The pattern to split by
 * @returns An array of words
 *
 * @category String
 */
export function splitWords(
	string: string,
	pattern?: string | RegExp,
): string[] {
	string ??= "";
	if (string.length === 0) return [];

	if (pattern != null) {
		const result = string.match(pattern);
		if (result != null) return result;
	}

	return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
}
