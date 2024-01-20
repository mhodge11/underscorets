import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsy.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, user => user.active)
 * // => objects for ['pebbles']
 * ```
 *
 * @param array The array to query
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns The slice of `array`
 *
 * @category Array
 */
export function dropWhile<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T) => boolean,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	const i = arr.findIndex((value) => !predicate(value));
	return arr.slice(i === -1 ? arr.length : i);
}
