import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

/**
 * This method iterates over elements of `array` until the predicate returns truthy.
 * Then it returns the index of the found element, else `-1`.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findIndex(users, ({ user }) => user === 'pebbles')
 * // => 2
 * ```
 *
 * @param array The array to inspect
 * @param predicate The function invoked per iteration
 * @param fromIndex The index to search from
 * @param fromRight Search from right to left
 * @template T The type of the array elements
 * @returns The index of the found element, else `-1`
 *
 * @category Array
 */
export function findIndex<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T, index: number, self: readonly T[]) => boolean,
	fromIndex?: number,
	fromRight?: boolean,
): number {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return -1;

	let i = (fromIndex ?? 0) + (fromRight ? 1 : -1);
	const { length } = arr;

	while (fromRight ? i-- : ++i < length)
		if (predicate(arr[i] as T, i, arr)) return i;

	return -1;
}
