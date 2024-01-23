/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
const reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
const reHasRegExpChar = RegExp(reRegExpChar.source);

/**
 * Escapes the `RegExp` special characters `^`, `$`, `\`, `.`, `*`, `+`,
 * `?`, `(`, `)`, `[`, `]`, `{`, `}`, and `|` in a string.
 *
 * *Based on [moderndash.escapeRegex](https://moderndash.io/docs/escapeRegex).*
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
