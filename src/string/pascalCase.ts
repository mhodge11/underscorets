import { deburr } from "./deburr.ts";
import { splitWords } from "./splitWords.ts";

/**
 * Converts a string to PascalCase.
 *
 * @example
 * ```ts
 * pascalCase('Foo Bar')
 * // => 'FooBar'
 *
 * pascalCase('fooBar')
 * // => 'FooBar'
 *
 * pascalCase('__FOO_BAR__')
 * // => 'FooBar'
 * ```
 *
 * @param string The string to convert
 * @returns The pascal cased string
 *
 * @category String
 */
export function pascalCase(string: string): string {
	string ??= "";
	if (string.length === 0) return string;

	string = deburr(string);

	const words = splitWords(string);
	let pascalCase = "";

	for (const word of words)
		pascalCase += `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

	return pascalCase;
}
