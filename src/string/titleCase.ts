import { deburr } from "./deburr.ts";
import { splitWords } from "./splitWords.ts";

/**
 * Converts a string to Title Case.
 *
 * @example
 * ```ts
 * titleCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * titleCase('fooBar')
 * // => 'Foo Bar'
 *
 * titleCase('__FOO_BAR__')
 * // => 'Foo Bar'
 *
 * titleCase('HélloWorld')
 * // => 'Hello World'
 * ```
 *
 * @param string The string to convert
 * @returns The title cased string
 *
 * @category String
 */
export function titleCase(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	string = deburr(string);

	const words = splitWords(string);
	let titleCase = "";

	for (const word of words)
		titleCase += `${word.charAt(0).toUpperCase()}${word
			.slice(1)
			.toLowerCase()} `;

	return titleCase.trimEnd();
}
