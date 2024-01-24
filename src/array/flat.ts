import type { ArrayFlat } from "../type/ArrayFlat";

import { arrayLikeToArray, fastArrayFlat } from "./utils.ts";

function isFlattenable(value: unknown): boolean {
	return Array.isArray(value) || !!(value as any)?.[Symbol.isConcatSpreadable];
}

function flatten<T, D extends number = 1>(
	array: readonly T[],
	depth: D,
	result?: ArrayFlat<T[], D>[],
): ArrayFlat<T[], D>[] {
	const d = depth;
	result ??= [];

	for (const value of array)
		if (d > 0 && isFlattenable(value))
			if (d > 1) flatten(value as any, d - 1, result);
			else result.push(...(value as any));
		else result[result.length] = value as any;

	return result;
}

/**
 * Flattens an array of arrays into a single array.
 * `Array.flat()` is much slower than this on Node >= 19.
 *
 * @example
 * ```ts
 * flat([1, [2, [3, [4]], 5]])
 * // => [1, 2, [3, [4]], 5]
 *
 * flat([1, [2, [3, [4]], 5]], 2)
 * // => [1, 2, 3, [4], 5]
 * ```
 *
 * @param arrays The array of arrays to flatten
 * @param depth The maximum recursion depth
 * @template T The type of the array elements
 * @template D The maximum recursion depth
 * @returns Returns the flattened array
 *
 * @category Array
 */
export function flat<T, D extends number = 1>(
	array: readonly T[] | ArrayLike<T>,
	depth?: D,
): ArrayFlat<T[], D>[] {
	if (!array?.length) return [];

	const arr = arrayLikeToArray(array);

	let d = depth ? Math.trunc(depth) : 1;
	d < 1 && (d = 1);

	if (d === 1) return fastArrayFlat(arr as any) as ArrayFlat<T[], D>[];

	return flatten(arr, d as D);
}
