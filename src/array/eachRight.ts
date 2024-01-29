import { arrayLikeToArray } from "./utils";

/**
 * This method is like `{@link each}` except that it iterates over elements of `array` from right to left.
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
export function eachRight<T>(
	array: readonly T[] | ArrayLike<T>,
	callback: (
		value: T,
		index: number,
		self: readonly T[],
	) => void | undefined | boolean,
): void {
	if (!array?.length) return;

	const arr = arrayLikeToArray(array);

	let { length } = arr;
	while (length--) if (callback(arr[length] as T, length, arr) === false) break;
}
