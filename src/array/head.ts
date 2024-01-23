import type { ArrayHead } from "../type/ArrayHead";

import { arrayLikeValues } from "../helpers/arrayLikeValues";

/**
 * Gets the first element of `array`.
 *
 * @example
 * ```ts
 * head([1, 2, 3]);
 * // => 1
 *
 * head([]);
 * // => undefined
 * ```
 *
 * @param array The array to query
 * @template T The type of the array elements
 * @returns The first element of `array`, or `undefined` if `array` is empty
 *
 * @category Array
 */
export function head<T>(array: readonly T[] | ArrayLike<T>): ArrayHead<T[]> {
	const arr = arrayLikeValues(array);
	return (arr?.length ? arr[0] : undefined) as ArrayHead<T[]>;
}
