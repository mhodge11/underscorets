import { isNaN } from "../helpers/isNaN.ts";
import { strictIndexOf } from "../helpers/strictIndexOf.ts";
import { findIndex } from "./findIndex.ts";

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
		: findIndex(array, isNaN, fromIndex);
}
