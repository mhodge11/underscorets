import { deburr } from "./deburr.ts";
import { splitWords } from "./splitWords.ts";

/**
 * Converts a string to snake_case.
 *
 * @example
 * ```ts
 * snakeCase('Foo Bar')
 * // => 'foo_bar'
 *
 * snakeCase('fooBar')
 * // => 'foo_bar'
 *
 * snakeCase('--FOO-BAR--')
 * // => 'foo_bar'
 *
 * snakeCase('foo2bar')
 * // => 'foo_2_bar'
 * ```
 *
 * @param string The string to convert
 * @returns The snake cased string
 *
 * @category String
 */
export function snakeCase(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	string = deburr(string);

	const words = splitWords(string);
	let snakeCase = "";

	for (const word of words) {
		if (snakeCase.length > 0) snakeCase += "_";
		snakeCase += word.toLowerCase();
	}

	return snakeCase;
}
