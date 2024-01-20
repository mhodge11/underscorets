/**
 * Checks if `string` starts with the given target string.
 *
 * @example
 * ```ts
 * startsWith("abc", "a");
 * // => true
 *
 * startsWith("abc", "b");
 * // => false
 *
 * startsWith("abc", "b", 1);
 * // => true
 * ```
 *
 * @param string The string to inspect
 * @param target The string to search for
 * @param position The position to search from
 * @returns true` if `string` starts with `target`, else `false`
 *
 * @category String
 */
export function startsWith(
	string: string,
	target: string,
	position?: number,
): boolean {
	string ??= "";
	target ??= "";

	const { length } = string;
	position = position == null ? 0 : position;

	if (position < 0) position = 0;
	else if (position > length) position = length;

	target = `${target}`;

	return string.slice(position, position + target.length) === target;
}
