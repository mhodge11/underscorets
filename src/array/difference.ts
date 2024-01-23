import type { ArrayMinLength } from "../type/ArrayMinLength";
import type { CompareFunction } from "../type/CompareFunction";
import type { PullOutArray } from "../type/PullOutArray";

import { arrayLikeValues } from "../helpers/arrayLikeValues";
import { fastArrayFlat } from "../helpers/fastArrayFlat";

/**
 * Create a new array with values from the first array that are not present in the other arrays.
 * Optionally, use a compare function to determine the comparison of elements (default is `===`).
 *
 * @example
 * ```ts
 * difference([2, 1], [2, 3], [6])
 * // => [1]
 *
 * // ---- Custom compare function ----
 * const compareByFloor = (a, b) => Math.floor(a) === Math.floor(b);
 * difference([1.2, 3.1], [1.3, 2.4], compareByFloor)
 * // => [3.1]
 *
 * // ---- Only compare by id ----
 * const arr1 = [{ id: 1, name: 'Yeet' }, { id: 3, name: 'John' }];
 * const arr2 = [{ id: 3, name: 'Carl' }, { id: 4, name: 'Max' }];
 *
 * difference(arr1, arr2, (a, b) => a.id === b.id)
 * // => [{ id: 1, name: 'Yeet' }]
 * ```
 *
 * @param arraysOrCompareFn Two or more arrays with an optional compare function at the end
 * @template T The type of the arrays provided
 * @template U The type of the array elements
 * @returns The new array of filtered values
 *
 * @category Array
 */
export function difference<U>(
	...arraysOrCompareFn: ArrayMinLength<U[] | ArrayLike<U>, 2>
): U[];
export function difference<
	T extends ArrayMinLength<unknown[] | ArrayLike<unknown>, 2>,
>(...arraysOrCompareFn: [...T, CompareFunction<T>]): PullOutArray<[...T]>;
export function difference<
	T extends ArrayMinLength<unknown[] | ArrayLike<unknown>, 2>,
	U,
>(
	...arraysOrCompareFn:
		| ArrayMinLength<U[] | ArrayLike<U>, 2>
		| [...T, CompareFunction<T>]
): PullOutArray<[...T]> {
	const compareFnProvided = typeof arraysOrCompareFn.at(-1) === "function";
	const compareFn =
		compareFnProvided && (arraysOrCompareFn.pop() as CompareFunction<T>);

	const arrayLikes = arraysOrCompareFn as T;
	const arrays = arrayLikes.map(arrayLikeValues);
	const firstArray = arrays.shift() as T;
	const combinedRestArray = fastArrayFlat(arrays);

	if (!compareFn) {
		const restSet = new Set(combinedRestArray);
		return firstArray.filter(
			(element) => !restSet.has(element),
		) as PullOutArray<[...T]>;
	}

	const difference = [] as unknown as PullOutArray<[...T]>;
	for (const elem of firstArray)
		if (combinedRestArray.every((item) => !compareFn(elem, item)))
			difference.push(elem);

	return difference;
}
