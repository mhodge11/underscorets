import { arrayLikeToArray } from "./utils.ts";

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
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	const { length } = arr;

	if (size == null || size <= 1)
		return [arr[Math.floor(Math.random() * length)] as T];

	let intSize = Math.trunc(size);
	let i = -1;
	const lastIndex = length - 1;

	const result = new Array(length) as T[];
	for (const value of arr) result[++i] = value;

	i = -1;
	intSize = intSize > length ? length : intSize;

	while (++i < intSize) {
		const rand = i + Math.floor(Math.random() * (lastIndex - i + 1));
		const value = result[rand];

		result[rand] = result[i] as T;
		result[i] = value as T;
	}

	return result.slice(0, intSize);
}
