import { arrayLikeValues } from "../helpers/arrayLikeValues.js";

/**
 * Creates a slice of `array` excluding elements dropped from the end.
 * Elements are dropped until `predicate` returns falsy.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropRightWhile(users, user => user.active)
 * // => objects for ['barney']
 * ```
 *
 * @param array The array to query
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns The slice of `array`
 *
 * @category Array
 */
export function dropRightWhile<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T) => boolean,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	let i = arr.length;
	while (i > 0 && predicate(arr[i - 1] as T)) i--;
	return arr.slice(0, i);
}
