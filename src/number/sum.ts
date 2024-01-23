import { reduce } from "../array/reduce";

/**
 * Calculates the sum of an array of numbers.
 *
 * Returns `NaN` if the input array is empty.
 *
 * @example
 * ```ts
 * sum([1, 2, 3, 4, 5])
 * // => 15
 *
 * sum([{ value: 1 }, { value: 2 }, { value: 3 }], (obj) => obj.value)
 * // => 6
 * ```
 *
 * @param numbers The input array of numbers
 * @template T The type of the input array
 * @returns The sum of the input array
 *
 * @category Number
 */
export function sum<T>(
	array: readonly T[],
	callback?: (value: T) => number,
): number {
	if (!array?.length) return NaN;

	const toNumber = callback ?? ((value) => +value);
	return reduce(array, (acc, value) => toNumber(value) + acc, 0);
}
