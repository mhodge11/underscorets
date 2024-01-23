import { arrayLikeValues } from "../helpers/arrayLikeValues";
import { sortCompare } from "../helpers/sortCompare";

function merge<T>(
	array1: T[],
	array2: T[],
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
) {
	const combined: T[] = [];

	let i = 0;
	let j = 0;

	while (i < array1.length && j < array2.length) {
		const compareResult = sortCompare(...criteria)(
			array1[i] as T,
			array2[j] as T,
		);
		if (compareResult < 0) {
			combined.push(array1[i] as T);
			i++;
		} else {
			combined.push(array2[j] as T);
			j++;
		}
	}

	combined.push(...array1.slice(i));
	combined.push(...array2.slice(j));

	return combined;
}

/**
 * Creates new array sorted in ascending/descending order with single or multiple criteria.
 *
 * @example
 * ```ts
 * mergeSort([1, 2, 3, 4], { order: 'desc' })
 * // => [4, 3, 2, 1]
 *
 * // --- Sorting by multiple properties ---
 * const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];
 *
 * mergeSort(array,
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
export function mergeSort<T>(
	array: readonly T[] | ArrayLike<T>,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return arr;
	if (arr.length < 2) return arr;

	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);

	return merge(
		mergeSort(left, ...criteria),
		mergeSort(right, ...criteria),
		...criteria,
	);
}
