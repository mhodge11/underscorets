import { deburr } from "./deburr.ts";
import { splitWords } from "./splitWords.ts";

/**
 * Converts a string to kebab-case.
 *
 * @example
 * ```ts
 * kebabCase('Foo Bar')
 * // => 'foo-bar'
 *
 * kebabCase('fooBar')
 * // => 'foo-bar'
 *
 * kebabCase('__FOO_BAR__')
 * // => 'foo-bar'
 * ```
 *
 * @param string The string to convert
 * @returns The kebab cased string
 *
 * @category String
 */
export function kebabCase(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	string = deburr(string);

	const words = splitWords(string);
	let kebabCase = "";

	for (const word of words) kebabCase += `${word.toLowerCase()}-`;

	return kebabCase.slice(0, -1);
}
