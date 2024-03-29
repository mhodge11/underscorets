import { findIndex } from "./findIndex";
import { arrayLikeToArray } from "./utils";

/**
 * This method is like `{@link findIndex}` except that it iterates over elements of `array` from right to left.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * findLastIndex(users, ({ user }) => user === 'pebbles')
 * // => 2
 * ```
 *
 * @param array The array to inspect
 * @param predicate The function invoked per iteration
 * @param fromIndex The index to search from
 * @template T The type of the array elements
 * @returns The index of the found element, else `-1`
 *
 * @category Array
 */
export function findLastIndex<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T, index: number, self: readonly T[]) => boolean,
	fromIndex?: number,
): number {
	if (!array?.length) return -1;

	const arr = arrayLikeToArray(array);

	const { length } = arr;
	let i = length - 1;

	if (fromIndex != null) {
		i = Math.trunc(fromIndex);
		i = fromIndex < 0 ? Math.max(length + i, 0) : Math.min(i, length - 1);
	}

	return findIndex(arr, predicate, i, true);
}
