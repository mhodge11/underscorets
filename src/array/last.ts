import type { ArrayLast } from "../type/ArrayLast";

import { arrayLikeToArray } from "./utils";

/**
 * Gets the last element of `array`.
 *
 * @example
 * ```ts
 * last([1, 2, 3])
 * // => 3
 * ```
 *
 * @param array The array to query
 * @template T The type of the array elements
 * @returns The last element of `array`, or `undefined` if `array` is empty
 *
 * @category Array
 */
export function last<T>(array: readonly T[] | ArrayLike<T>): ArrayLast<T[]> {
	if (!array?.length) return undefined as ArrayLast<T[]>;

	const arr = arrayLikeToArray(array);
	return arr[arr.length - 1] as ArrayLast<T[]>;
}
