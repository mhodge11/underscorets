import type { ArrayReduce } from "../type/ArrayReduce";

import { arrayLikeValues } from "../helpers/arrayLikeValues";

/**
 * Reduces an array to a single value by invoking the callback function for each element in the array.
 *
 * @example
 * ```ts
 * reduce([1, 2, 3, 4, 5], (acc, value) => acc + value);
 * // => 15
 * ```
 *
 * @param array The array to iterate over
 * @param callback The function invoked per iteration
 * @param accumulator The initial value
 * @param initAccum Whether to use the first element as the initial value
 * @template T Type of the array elements
 * @template Acc Type of the accumulator
 * @throws {TypeError} If accumulator is nullish and initAccum is false
 * @returns The reduced value
 *
 * @category Array
 */
export function reduce<T, Acc = T>(
	array: readonly T[] | ArrayLike<T>,
	callback: (acc: Acc, value: T, index: number, self: readonly T[]) => Acc,
	accumulator?: Acc,
	initAccum?: boolean,
): ArrayReduce<T[], Acc> {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return accumulator as ArrayReduce<T[], Acc>;

	let i: number = -1;
	const { length } = arr;

	if (accumulator === undefined) initAccum = true;
	if (initAccum && length) accumulator = arr[++i] as Acc;

	while (++i < length) {
		const acc: Acc | undefined = accumulator;

		if (acc == null)
			throw new TypeError(
				"(reduce) Accumulator is nullish. Make sure to provide an initial accumulator value if one cannot be inferred.",
			);

		accumulator = callback(acc, arr[i] as T, i, arr);
	}

	return accumulator as ArrayReduce<T[], Acc>;
}
