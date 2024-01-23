import { arrayLikeValues } from "../helpers/arrayLikeValues.js";
import { sortCompare } from "../helpers/sortCompare.js";

/**
 * Creates new array sorted in ascending/descending order with single or multiple criteria.
 *
 * @example
 * ```ts
 * insertionSort([1, 2, 3, 4], { order: 'desc' })
 * // => [4, 3, 2, 1]
 *
 * // --- Sorting by multiple properties ---
 * const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];
 *
 * insertionSort(array,
 *   { order: 'asc', by: item => item.a },
 *   { order: 'desc', by: item => item.b }
 * )
 * // => [{ a: 1, b: 2 }, { a: 1, b: 1 }, { a: 2, b: 1 }]
 * ```
 *
 * @param array Array to sort
 * @param criteria Criteria to sort by
 * @param criteria.order Order to sort in, either 'asc' or 'desc'
 * @param criteria.by Iteratee function to sort based on a specific property
 * @template T Type of the array elements
 * @returns New sorted array
 *
 * @category Array
 */
export function insertionSort<T>(
	array: readonly T[] | ArrayLike<T>,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];
	if (arr.length < 2) return arr;

	const sortedArray = [...arr];
	let temp: T;

	for (let i = 1; i < sortedArray.length; i++) {
		temp = sortedArray[i] as T;
		let j = i - 1;
		while (j > -1 && sortCompare(...criteria)(sortedArray[j] as T, temp) > 0) {
			sortedArray[j + 1] = sortedArray[j] as T;
			j--;
		}

		sortedArray[j + 1] = temp;
	}

	return sortedArray;
}
