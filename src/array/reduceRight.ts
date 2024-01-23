import type { ArrayReduce } from "../type/ArrayReduce.ts";

import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

/**
 * Like `{@link reduce}`, but iterates from right to left.
 *
 * @example
 * ```ts
 * reduceRight([1, 2, 3, 4, 5], (acc, value) => acc + value);
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
export function reduceRight<T, Acc = T>(
	array: readonly T[] | ArrayLike<T>,
	iteratee: (acc: Acc, value: T, index: number, self: readonly T[]) => Acc,
	accumulator?: Acc,
	initAccum?: boolean,
): ArrayReduce<T[], Acc> {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return accumulator as ArrayReduce<T[], Acc>;

	let { length } = arr;

	if (accumulator === undefined) initAccum = true;
	if (initAccum && length) accumulator = arr[--length] as Acc;

	while (length--) {
		const acc: Acc | undefined = accumulator;

		if (acc == null)
			throw new TypeError(
				"(arrayReduceRight) Accumulator is nullish. Make sure to provide an initial accumulator value if one cannot be inferred.",
			);

		accumulator = iteratee(acc, arr[length] as T, length, arr);
	}

	return accumulator as ArrayReduce<T[], Acc>;
}
