import type { ArrayMinLength } from "../type/ArrayMinLength";
import type { CompareFunction } from "../type/CompareFunction";
import type { PullOutArray } from "../type/PullOutArray";

import { unique } from "./unique";
import { arrayLikeToArray, fastArrayFlat } from "./utils";

/**
 * Create an array with unique values that are present in all arrays.
 * The order of the values is based on the first array.
 *
 * Optionally, use a compare function for element comparison (default is `===`).
 *
 * @example
 * ```ts
 * intersection([2, 1], [2, 3], [6, 2])
 * // => [2]
 *
 * // ---- Custom compare function ----
 * const compareFn = (a, b) => Math.floor(a) === Math.floor(b);
 *
 * intersection([1.2, 1.1], [1.3, 2.4], compareFn)
 * // => [1.2]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * intersection(arr1, arr2, (a, b) => a.id === b.id)
 * // => [{ id: 3, name: 'John' }]
 * ```
 *
 * @param arraysOrCompareFn Two or more arrays with an optional compare function at the end
 * @template T Type of the arrays provided
 * @template U Type of the array elements
 * @returns New array of intersecting values
 *
 * @category Array
 */
export function intersection<U>(
	...arraysOrCompareFn: ArrayMinLength<U[] | ArrayLike<U>, 2>
): U[];
export function intersection<
	T extends ArrayMinLength<unknown[] | ArrayLike<unknown>, 2>,
>(...arraysOrCompareFn: [...T, CompareFunction<T>]): PullOutArray<[...T]>;
export function intersection<
	T extends ArrayMinLength<unknown[] | ArrayLike<unknown>, 2>,
	U,
>(
	...arraysOrCompareFn:
		| ArrayMinLength<U[] | ArrayLike<U>, 2>
		| [...T, CompareFunction<T>]
): PullOutArray<[...T]> {
	const compareFnProvided = typeof arraysOrCompareFn.at(-1) === "function";
	const compareFunction =
		compareFnProvided && (arraysOrCompareFn.pop() as CompareFunction<T>);

	const arrayLikes = arraysOrCompareFn as T;
	const arrays = arrayLikes.map(arrayLikeToArray);
	const firstArray = unique(arrays.shift() as unknown[]);
	const combinedRestArray = fastArrayFlat(arrays);

	if (!compareFunction) {
		const restSet = new Set(combinedRestArray);
		return firstArray.filter((elem) => restSet.has(elem)) as PullOutArray<
			[...T]
		>;
	}

	const intersection = [] as unknown as PullOutArray<[...T]>;
	for (const elem of unique(firstArray))
		if (combinedRestArray.some((item) => compareFunction(elem, item)))
			intersection.push(elem);

	return intersection;
}
