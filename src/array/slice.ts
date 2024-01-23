import { arrayLikeValues } from "../helpers/arrayLikeValues.js";

/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 *
 * @example
 * ```ts
 * slice([1, 2, 3, 4], 1, 3)
 * // => [2, 3]
 * ```
 *
 * @param array The array to slice
 * @param start The start index
 * @param end The end index (exclusive)
 * @template T The type of the array elements
 * @returns The sliced array
 *
 * @category Array
 */
export function slice<T = unknown>(
	array: T[] | ArrayLike<T>,
	start: number,
	end?: number,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	let { length } = arr;

	start = start == null ? 0 : start;
	end = end == null ? length : end;

	if (start < 0) start = -start > length ? 0 : length + start;

	end = end > length ? length : end;

	if (end < 0) end += length;

	length = start > end ? 0 : (end - start) >>> 0;
	start >>>= 0;

	let i: number = -1;
	const result = new Array(length);

	while (++i < length) result[i] = arr[i + start];

	return result as T[];
}
