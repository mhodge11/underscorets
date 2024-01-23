import { map } from "../array/map.js";
import { floor } from "./floor.js";

/**
 * Calculates the median of an array of numbers
 *
 * Returns `NaN` if the input array is empty.
 *
 * @example
 * ```ts
 * median([1, 2, 3, 4, 5]) // => 3
 * median([1, 2, 3, 4, 5, 6]) // => 3.5
 * ```
 *
 * @param numbers The input array of numbers
 * @returns The median of the input array
 *
 * @category Number
 */
export function median<T>(
	numbers: readonly T[],
	callback?: (value: T) => number,
): number {
	if (numbers.length === 0) return NaN;

	const converter = callback ?? ((value: T) => +value);
	const mappedArray = map(numbers, converter);
	const sortedArray = mappedArray.toSorted((a, b) => a - b);
	const mid = floor(sortedArray.length / 2);

	return sortedArray.length % 2 === 0
		? ((sortedArray[mid - 1] as number) + (sortedArray[mid] as number)) / 2
		: (sortedArray[mid] as number);
}
