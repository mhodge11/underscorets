import { arrayLikeToArray } from "./utils";

/**
 * Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
 *
 * @example
 * ```ts
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 * ```
 *
 * @param array The array to chunk
 * @param size The length of each chunk
 * @template T The type of the array elements
 * @returns The new array of chunks
 *
 * @category Array
 */
export function chunk<T>(
	array: readonly T[] | ArrayLike<T>,
	size: number,
): T[][] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);
	const intSize = Math.trunc(size);

	if (intSize < 1) return [];

	let i = 0;
	let j = 0;
	const chunks = new Array(Math.ceil(arr.length / size));

	while (i < arr.length) chunks[j++] = arr.slice(i, (i += intSize));

	return chunks;
}
