import { arrayLikeToArray } from "./utils";

/**
 * Creates a slice of `array` with `n` elements taken from the beginning.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * take(users, 2)
 * // => objects for ['barney', 'fred']
 * ```
 *
 * @param array The array to query
 * @param n The number of elements to take
 * @template T The type of the array elements
 * @returns The new array of taken elements
 *
 * @category Array
 */
export function take<T>(array: T[] | ArrayLike<T>, n?: number): T[] {
	if (!array?.length) return [];

	n ??= 1;

	const arr = arrayLikeToArray(array);
	return arr.slice(0, n < 0 ? 0 : Math.trunc(n));
}
