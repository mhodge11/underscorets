import { arrayLikeValues } from "../helpers/arrayLikeValues";

/**
 * Creates a slice of `array` with elements taken from the end.
 * Elements are taken until `predicate` returns falsy.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': true }
 * ]
 *
 * takeRightWhile(users, user => user.active)
 * // => objects for ['fred', 'pebbles']
 * ```
 *
 * @param array The array to query
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns The new array of taken elements
 *
 * @category Array
 */
export function takeRightWhile<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T) => boolean,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	const taken: T[] = [];

	for (let i = arr.length - 1; i >= 0; i--)
		if (predicate(arr[i] as T)) taken.unshift(arr[i] as T);
		else break;

	return taken;
}
