import { arrayLikeValues } from "../helpers/arrayLikeValues";

/**
 * Checks if `value` is in `array` based on [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero) comparison.
 * Optionally, a `compareFn` can be provided to customize the comparison.
 *
 * @example
 * ```ts
 * includes([1, 2, 3], 1);
 * // => true
 *
 * includes([1, 2, 3], 1, (a, b) => a === b);
 * // => true
 * ```
 *
 * @param array The array to query
 * @param value The value to search for
 * @param compareFn The function invoked per iteration
 * @template T The type of the array elements
 * @returns `true` if `value` is found, else `false`
 *
 * @category Array
 */
export function includes<T>(
	array: readonly T[],
	value: T,
	compareFn?: (a: T, b: T) => boolean,
): boolean {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return false;

	if (!compareFn) compareFn = (a, b) => a === b;
	for (const item of arr) if (compareFn(value, item)) return true;

	return false;
}
