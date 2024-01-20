import { sum } from "./sum";

/**
 * Calculates the average of an array of numbers
 *
 * Returns `NaN` if the input array is empty.
 *
 * @example
 * ```ts
 * average([1, 2, 3, 4, 5]) // => 3
 * ```
 *
 * @param numbers The input array of numbers
 * @returns The average of the input array, or NaN if the input array is empty
 *
 * @category Number
 */
export function average<T>(
	numbers: readonly T[],
	callback?: (value: T) => number,
): number {
	if (numbers.length === 0) return NaN;
	return sum(numbers, callback) / numbers.length;
}
