/**
 * Check if `string` ends with the given target string.
 *
 * @example
 * ```ts
 * endsWith("abc", "c");
 * // => true
 *
 * endsWith("abc", "b");
 * // => false
 *
 * endsWith("abc", "b", 2);
 * // => true
 * ```
 *
 * @param string The string to inspect
 * @param target The string to search for
 * @param position The position to search up to
 * @returns `true` if `string` ends with `target`, else `false`
 *
 * @category String
 */
export function endsWith(
	string: string,
	target: string,
	position?: number,
): boolean {
	string ??= "";
	target ??= "";

	const { length } = string;
	position = position === undefined ? length : +position;

	if (position < 0 || position !== position) position = 0;
	else if (position > length) position = length;

	const end = position;
	position -= target.length;

	return position >= 0 && string.slice(position, end) === target;
}
