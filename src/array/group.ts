import { arrayLikeToArray } from "./utils.ts";

/**
 * Creates an object with grouped items in the array.
 *
 * @example
 * ```ts
 * group([6.1, 4.2, 6.3], Math.floor)
 * // => { 4: [4.2], 6: [6.1, 6.3] }
 *
 * group([6.1, 4.2, 6.3], value => value > 5 ? '>5' : '<=5')
 * // => { '<=5': [4.2], '>5': [6.1, 6.3] }
 * ```
 *
 * @param array The array or object to iterate over
 * @param getGroupKey A function that returns the group id for each item
 * @template T The type of the array elements
 * @returns An object with grouped items
 *
 * @category Array
 */
export function group<T, K extends PropertyKey>(
	array: readonly T[] | ArrayLike<T>,
	getGroupKey: (value: T) => K,
): Record<K, T[]> {
	if (!array?.length) return {} as Record<K, T[]>;

	const arr = arrayLikeToArray(array);

	const groupedArr = {} as Record<K, T[]>;

	for (const value of arr) {
		const key = getGroupKey(value);
		(groupedArr[key] ??= []).push(value);
	}

	return groupedArr;
}
