/**
 * Trims specified characters from the start of the string.
 *
 * *Use the native [trimStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart) method if you want to trim whitespace.*
 *
 * @example
 * ```ts
 * trimStart('$$$abc', '$')
 * // => 'abc'
 *
 * trimStart('_!!_abc', '_!')
 * // => 'abc'
 * ```
 *
 * @param string The string to trim
 * @param chars The characters to trim
 * @returns The trimmed string
 *
 * @category String
 */
export function trimStart(string: string, chars: string): string {
	string ??= "";
	chars ??= "";
	if (string.length === 0 || chars.length === 0) return string;

	let startIndex = 0;

	while (
		startIndex < string.length &&
		chars.includes(string[startIndex] as string)
	)
		startIndex++;

	return string.slice(startIndex);
}
