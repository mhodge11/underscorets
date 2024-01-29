import { arrayLikeToArray } from "./utils";

type Falsy = false | 0 | "" | null | undefined;

/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @example
 * ```ts
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 * ```
 *
 * @param array The array to compact
 * @template T (non-nullable) The type of the array elements
 * @returns The new array of filtered values
 *
 * @category Array
 */
export function compact<T extends NonNullable<unknown>>(
	array: readonly (T | Falsy)[] | ArrayLike<T | Falsy>,
): T[] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	let i = 0;
	const result: T[] = [];

	for (const value of arr) if (value) result[i++] = value;

	return result;
}
