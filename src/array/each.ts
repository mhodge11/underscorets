import { arrayLikeToArray } from "./utils.ts";

/**
 * Iterates over elements of `array` and invokes `callback` for each element.
 * Callback functions may exit iteration early by explicitly returning `false`.
 *
 * @example
 * ```ts
 * each([1, 2], value => console.log(value))
 * // => Logs `1` then `2`.
 * ```
 *
 * @param array The array to iterate over
 * @param callback The function invoked per iteration
 * @template T The type of the array elements
 *
 * @category Array
 */
export function each<T>(
	array: readonly T[] | ArrayLike<T>,
	callback: (
		value: T,
		index: number,
		self: readonly T[],
	) => void | undefined | boolean,
): void {
	if (!array?.length) return;

	const arr = arrayLikeToArray(array);

	let i = -1;
	const { length } = arr;
	while (++i < length) if (callback(arr[i] as T, i, arr) === false) break;
}
