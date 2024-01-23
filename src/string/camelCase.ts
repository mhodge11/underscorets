import { deburr } from "./deburr.js";
import { splitWords } from "./splitWords.js";

/**
 * Converts `string` to camelCase.
 *
 * @example
 * ```ts
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 * ```
 *
 * @param string The string to convert
 * @returns The camel cased string
 *
 * @category String
 */
export function camelCase(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	string = deburr(string);

	const words = splitWords(string);
	let camelCase = "";

	for (const [index, word] of words.entries())
		camelCase +=
			index === 0
				? word.toLowerCase()
				: `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;

	return camelCase;
}
