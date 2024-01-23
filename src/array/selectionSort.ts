import { arrayLikeValues } from "../helpers/arrayLikeValues";
import { sortCompare } from "../helpers/sortCompare";

/**
 * Creates new array sorted in ascending/descending order with single or multiple criteria.
 *
 * @example
 * ```ts
 * selectionSort([1, 2, 3, 4], { order: 'desc' })
 * // => [4, 3, 2, 1]
 *
 * // --- Sorting by multiple properties ---
 * const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];
 *
 * selectionSort(array,
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
export function selectionSort<T>(
	array: readonly T[] | ArrayLike<T>,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
) {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];
	if (arr.length < 2) return arr;

	const sortedArray = [...arr];
	let min: number;

	for (let i = 0; i < sortedArray.length - 1; i++) {
		min = i;

		for (let j = i + 1; j < sortedArray.length; j++) {
			if (
				sortCompare(...criteria)(sortedArray[j] as T, sortedArray[min] as T) < 0
			)
				min = j;
		}

		if (i !== min) {
			const temp = sortedArray[i] as T;
			sortedArray[i] = sortedArray[min] as T;
			sortedArray[min] = temp;
		}
	}

	return sortedArray;
}
