import {
	reHasUnescapedHtml,
	reUnescapedHtml,
	unhtmlEntityMap,
} from "../config/regex.ts";

/**
 * Converts the characters `&`, `<`, `>`, `"` and `'` in a string to their corresponding HTML entities.
 *
 * *Based on [moderndash.escapeHtml](https://moderndash.io/docs/escapeHtml).*
 *
 * @example
 * ```ts
 * escapeHtml('fred, barney, & pebbles')
 * // => 'fred, barney, &amp; pebbles'
 * ```
 *
 * @param string The string to escape
 * @returns The escaped string
 *
 * @category String
 */
export function escapeHtml(string: string): string {
	string ??= "";
	if (string.length === 0 || !reHasUnescapedHtml.test(string)) return string;

	return string.replace(
		reUnescapedHtml,
		(entity: string) => unhtmlEntityMap.get(entity) ?? "",
	);
}
