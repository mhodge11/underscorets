/**
 * Trims the specified characters from the end of the string.
 *
 * *Use the native [trimEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd) method if you want to trim whitespace.*
 *
 * @example
 * ```ts
 * trimEnd('abc$$$', '$')
 * // => 'abc'
 *
 * trimEnd('abc_!!_', '_!')
 * // => 'abc'
 * ```
 *
 * @param string The string to trim
 * @param chars The characters to trim
 * @returns The trimmed string
 *
 * @category String
 */
export function trimEnd(string: string, chars: string): string {
	string ??= "";
	chars ??= "";
	if (string.length === 0 || chars.length === 0) return string;

	let lastIndex = string.length - 1;

	while (lastIndex >= 0 && chars.includes(string[lastIndex] as string))
		lastIndex--;

	return string.slice(0, lastIndex + 1);
}
