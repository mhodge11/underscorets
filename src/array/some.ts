import { arrayLikeToArray } from "./utils";

/**
 * Checks if `predicate` returns truthy for **any** element of `array`.
 * Iteration is stopped once `predicate` returns truthy.
 *
 * @example
 * ```ts
 * some([null, 0, 'yes', false], Boolean)
 * // => true
 * ```
 *
 * @param array The array to iterate over.
 * @param predicate The function invoked per iteration
 * @returns `true` if any element passes the predicate check, else `false`
 *
 * @category Array
 */
export function some<T>(
	array: readonly T[] | ArrayLike<T>,
	predicate: (value: T, index: number, self: readonly T[]) => boolean,
): boolean {
	if (!array?.length) return false;

	const arr = arrayLikeToArray(array);

	let i = -1;
	const { length } = arr;

	while (++i < length) if (predicate(arr[i] as T, i, arr)) return true;

	return false;
}
