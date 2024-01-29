import { arrayLikeToArray } from "./utils";

/**
 * Moves an element within an array.
 *
 * @example
 * ```ts
 * move([1, 2, 3, 4, 5], 0, 2);
 * // => [2, 3, 1, 4, 5]
 * ```
 *
 * @param array The input array
 * @param from Index of the element to move
 * @param to Target index for the element
 * @template T Type of the array elements
 * @throws {RangeError} If index is out of bounds
 * @returns The modified array with the moved element
 *
 * @category Array
 */
export function move<T>(
	array: T[] | ArrayLike<T>,
	from: number,
	to: number,
): T[] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	if (from < 0 || from >= arr.length)
		throw new RangeError(
			`Invalid 'from': ${from}. Must be between 0 and ${arr.length - 1}.`,
		);

	if (to < 0 || to >= arr.length)
		throw new RangeError(
			`Invalid 'to': ${to}. Must be between 0 and ${arr.length - 1}.`,
		);

	if (from === to) return arr;

	const item = arr[from];

	if (from < to) for (let i = from; i < to; i++) arr[i] = arr[i + 1] as T;
	else for (let i = from; i > to; i--) arr[i] = arr[i - 1] as T;

	arr[to] = item as T;

	return arr;
}
