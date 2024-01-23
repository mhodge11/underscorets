import { arrayLikeValues } from "../helpers/arrayLikeValues";

/**
 * Creates a slice of `array` with elements taken from the beginning.
 * Elements are taken until `predicate` returns falsy.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * takeWhile(users, user => user.active)
 * // => objects for ['barney', 'fred']
 * ```
 *
 * @param array The array to query
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns The new array of taken elements
 *
 * @category Array
 */
export function takeWhile<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T) => boolean,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	const taken: T[] = [];

	for (const value of arr)
		if (predicate(value)) taken.push(value);
		else break;

	return taken;
}
