import { toInteger } from "../misc/toInteger";
import { slice } from "./slice";

/**
 * Creates a slice of `array` with `n` elements taken from the end.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeRight(users, 2)
 * // => objects for ['fred', 'pebbles']
 * ```
 *
 * @param array The array to query
 * @param n The number of elements to take
 * @template T The type of the array elements
 * @returns The new array of taken elements
 *
 * @category Array
 */
export function takeRight<T>(array: T[] | ArrayLike<T>, n?: number): T[] {
	if (!array?.length) return [];

	const { length } = array;
	n = length - toInteger(n ?? 1);

	return slice(array, n < 0 ? 0 : n, length);
}
