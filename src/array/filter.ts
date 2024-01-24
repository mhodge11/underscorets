import { arrayLikeToArray } from "./utils.ts";

/**
 * Iterates over elements of `array`, returning an array of all elements `predicate` returns truthy for.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ]
 *
 * filter(users, ({ active }) => active)
 * // => objects for ['barney']
 * ```
 *
 * @since 5.0.0
 * @category Array
 * @param array The array to iterate over
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns The new filtered array
 *
 * @category Array
 */
export function filter<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T, index: number, self: readonly T[]) => boolean,
): T[] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	let i = -1;
	let resI = 0;
	const { length } = arr;
	const result: T[] = [];

	while (++i < length)
		if (predicate(arr[i] as T, i, arr)) result[resI++] = arr[i] as T;

	return result;
}
