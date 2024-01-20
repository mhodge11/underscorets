import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";

/**
 * Checks if `predicate` returns truthy for **all** elements of `array`.
 * Iteration is stopped once `predicate` returns falsey.
 *
 * **Note:** This method returns `true` for
 * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty arrays.
 *
 * @example
 * ```ts
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 * ```
 *
 * @param array The array to iterate over
 * @param predicate The function invoked per iteration
 * @template T The type of the array elements
 * @returns `true` if all elements pass the predicate check, else `false`
 *
 * @category Array
 */
export function every<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T, index: number, self: readonly T[]) => boolean,
): boolean {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return true;

	let i = -1;
	const { length } = arr;

	while (++i < length) if (!predicate(arr[i] as T, i, arr)) return false;

	return true;
}
