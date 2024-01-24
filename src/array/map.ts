import { arrayLikeToArray } from "./utils.ts";

/**
 * Creates an array of values by running each element in `array` through `callback`.
 *
 * @example
 * ```ts
 * map([4, 8], n => n * n)
 * // => [16, 64]
 * ```
 *
 * @param array The array to iterate over
 * @param callback The function invoked per iteration
 * @template T The type of the array elements
 * @template R The type of the returned array elements
 * @returns The new mapped array
 *
 * @category Array
 */
export function map<T, R = T>(
	array: readonly T[] | ArrayLike<T>,
	callback: (value: T, index: number, self: readonly T[]) => R,
): R[] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	const { length } = arr;
	const mapped: R[] = new Array(length);
	let i = -1;

	while (++i < length) mapped[i] = callback(arr[i] as T, i, arr);

	return mapped;
}
