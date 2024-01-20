/**
 * Trim the string from the left and right by the given characters
 *
 * *Use the native [trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) method if you want to trim whitespace.*
 *
 * @example
 * ```ts
 * trim('$$abc$', '$')
 * // => 'abc'
 *
 * trim('!!abc_!', '_!')
 * // => 'abc'
 * ```
 * @param string The string to trim
 * @param chars The characters to trim
 * @returns The trimmed string
 *
 * @category String
 */
export function trim(string: string, chars: string): string {
	string ??= "";
	chars ??= "";
	if (string.length === 0 || chars.length === 0) return string;

	let startIndex = 0;
	let endIndex = string.length - 1;

	while (
		startIndex < string.length &&
		chars.includes(string[startIndex] as string)
	)
		startIndex++;

	while (endIndex >= startIndex && chars.includes(string[endIndex] as string))
		endIndex--;

	return string.slice(startIndex, endIndex + 1);
}
