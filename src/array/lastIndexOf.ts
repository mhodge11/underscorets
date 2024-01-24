import { findIndex } from "./findIndex";
import { arrayLikeToArray } from "./utils.ts";

function strictLastIndexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex: number,
): number {
	const arr = arrayLikeToArray(array);

	let i: number = fromIndex + 1;
	while (i--) if (arr[i] === value) return i;

	return i;
}

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
	if (!array?.length) return -1;

	const { length } = array;
	let i: number = length;

	if (fromIndex !== undefined) {
		i = Math.trunc(fromIndex);
		i = i < 0 ? Math.max(length + i, 0) : Math.min(i, length - 1);
	}

	return value === value
		? strictLastIndexOf(array, value, i)
		: findIndex(array, (value) => value !== value, i, true);
}
