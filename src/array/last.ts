import type { ArrayLast } from "../types/ArrayLast.ts";

import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

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
	const arr = arrayLikeValues(array);
	if (!arr?.length) return undefined as ArrayLast<T[]>;

	return arr[arr.length - 1] as ArrayLast<T[]>;
}
