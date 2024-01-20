import { reHasRegExpChar, reRegExpChar } from "../config/regex.ts";

/**
 * Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`,
 * `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.
 *
 * @example
 * ```ts
 * escapeRegExp('[hello](https://helloworld.io/)')
 * // => '\[hello\]\(https://helloworld\.io/\)'
 * ```
 *
 * @param string The string to escape
 * @returns The escaped string
 *
 * @category String
 */
export function escapeRegExp(string: string): string {
	string ??= "";
	if (string.length === 0 || !reHasRegExpChar.test(string)) return string;

	return string.replace(reRegExpChar, "\\$&");
}
