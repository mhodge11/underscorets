import { toInteger } from "../misc/toInteger";
import { slice } from "./slice";

/**
 * Creates a slice of `array` excluding `n` elements dropped from the beginning.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * drop(users, 2)
 * // => objects for ['pebbles']
 * ```
 *
 * @param array The array to query
 * @param n The number of elements to drop
 * @template T The type of the array elements
 * @returns The slice of `array`
 *
 * @category Array
 */
export function drop<T>(array: readonly T[] | ArrayLike<T>, n?: number): T[] {
	if (!array?.length) return [];

	n ??= 1;
	const { length } = array;

	return slice(array, n < 0 ? 0 : toInteger(n), length);
}
