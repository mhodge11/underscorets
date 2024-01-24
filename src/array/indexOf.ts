import { findIndex } from "./findIndex";
import { arrayLikeToArray } from "./utils.ts";

function strictIndexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex: number,
): number {
	if (!array?.length) return -1;

	const arr = arrayLikeToArray(array);

	let i = fromIndex - 1;
	const { length } = arr;

	while (++i < length) if (arr[i] === value) return i;

	return -1;
}

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @example
 * ```ts
 * indexOf([1, 2, 1, 2], 2)
 * // => 1
 *
 * // Search from the `fromIndex`.
 * indexOf([1, 2, 1, 2], 2, 2)
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
export function indexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex?: number,
): number {
	fromIndex ??= 0;
	return value === value
		? strictIndexOf(array, value, fromIndex)
		: findIndex(array, (value) => value !== value, fromIndex);
}
