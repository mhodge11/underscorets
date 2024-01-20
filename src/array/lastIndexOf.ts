import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";
import { isNaN } from "../helpers/isNaN.ts";
import { strictLastIndexOf } from "../helpers/strictLastIndexOf.ts";
import { toInteger } from "../util/toInteger.ts";
import { findIndex } from "./findIndex.ts";

/**
 * This method is like `{@link indexOf}` except that it iterates over elements of `array` from right to left.
 *
 * @example
 * ```ts
 * lastIndexOf([1, 2, 1, 2], 2)
 * // => 3
 * ```
 *
 * @param array The array to query
 * @param value The value to search for
 * @param fromIndex The index to search from
 * @template T The type of the array elements
 * @returns The index of the matched value, else `-1`
 *
 * @category Array
 */
export function lastIndexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex?: number,
) {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return -1;

	const { length } = arr;
	let i: number = length;

	if (fromIndex !== undefined) {
		i = toInteger(fromIndex);
		i = i < 0 ? Math.max(length + i, 0) : Math.min(i, length - 1);
	}

	return value === value
		? strictLastIndexOf(arr, value, i)
		: findIndex(arr, isNaN, i, true);
}
