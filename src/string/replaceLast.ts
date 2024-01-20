/**
 * Replaces the last occurrence of a string.
 *
 * @example
 * ```ts
 * replaceLast("Foo Bar Bar", "Bar", "Boo");
 * // => "Foo Bar Boo"
 * ```
 *
 * @param string The string to replace in
 * @param searchFor The string to search for
 * @param replaceWith The string to replace with
 * @returns The replaced string
 *
 * @category String
 */
export function replaceLast(
	string: string,
	searchFor: string,
	replaceWith: string,
): string {
	string ??= "";
	if (string.length === 0) return string;

	const i = string.lastIndexOf(searchFor);
	if (i === -1) return string;

	return `${string.slice(0, i)}${replaceWith}${string.slice(
		i + searchFor.length,
	)}`;
}
