import { toInteger } from "../util/toInteger.ts";
import { slice } from "./slice.ts";

/**
 * Creates a slice of `array` excluding `n` elements dropped from the end.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRight(users, 2)
 * // => objects for ['barney']
 * ```
 *
 * @param array The array to query
 * @param n The number of elements to drop
 * @template T The type of the array elements
 * @returns The slice of `array`
 *
 * @category Array
 */
export function dropRight<T>(
	array: readonly T[] | ArrayLike<T>,
	n?: number,
): T[] {
	if (!array?.length) return [];

	const { length } = array;
	n = length - toInteger(n ?? 1);

	return slice(array, 0, n < 0 ? 0 : n);
}
