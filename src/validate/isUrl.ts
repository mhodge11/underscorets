/**
 * Checks if given string is a valid URL
 *
 * @example
 * ```ts
 * isUrl('https://google.com')
 * // => true
 * isUrl('google.com')
 * // => false
 * ```
 *
 * @param string The string to check
 * @returns `true` if given string is a valid URL, else `false`
 *
 * @category Validate
 */
export function isUrl(string: string): boolean {
	try {
		new URL(string);
		return true;
	} catch {
		return false;
	}
}
