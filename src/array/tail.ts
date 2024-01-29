import type { ArrayTail } from "../type/ArrayTail";

import { arrayLikeToArray } from "./utils";

/**
 * Gets all but the first element of `array`.
 *
 * @example
 * ```ts
 * tail([1, 2, 3])
 * // => [2, 3]
 * ```
 *
 * @param array The array to query
 * @template T The type of the array elements
 * @returns The slice of `array`
 *
 * @category Array
 */
export function tail<T>(array: readonly T[] | ArrayLike<T>): ArrayTail<T[]> {
	if (!array?.length) return [] as ArrayTail<T[]>;

	const arr = arrayLikeToArray(array);
	const [, ...result] = arr;
	return result as ArrayTail<T[]>;
}
