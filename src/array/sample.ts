import { arrayLikeValues } from "../helpers/arrayLikeValues.js";
import { copyArray } from "../helpers/copyArray.js";
import { toInteger } from "../misc/toInteger.js";
import { floor } from "../number/floor.js";
import { slice } from "./slice.js";

/**
 * Gets a random element from `array`.
 * Optionally, gets up to `size` elements.
 *
 * @example
 * ```ts
 * sample([1, 2, 3, 4])
 * // => [2]
 *
 * sample([1, 2, 3, 4], 2)
 * // => [3, 1]
 * ```
 *
 * @param array The array to sample
 * @param size The number of elements to sample
 * @template T Type of the array elements
 * @returns The random element(s) from `array` as an array
 *
 * @category Array
 */
export function sample<T>(
	array: readonly T[] | ArrayLike<T>,
	size?: number,
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	const { length } = arr;

	if (size == null || size <= 1)
		return [arr[floor(Math.random() * length)] as T];

	let intSize = toInteger(size);
	let i = -1;
	const lastIndex = length - 1;
	const result = copyArray(arr);

	intSize = intSize > length ? length : intSize;

	while (++i < intSize) {
		const rand = i + floor(Math.random() * (lastIndex - i + 1));
		const value = result[rand];

		result[rand] = result[i] as T;
		result[i] = value as T;
	}

	return slice(result, 0, intSize);
}
