import { arrayLikeValues } from "../helpers/arrayLikeValues";
import { sortCompare } from "../helpers/sortCompare";

function swap<T>(array: T[], firstIndex: number, secondIndex: number) {
	const temp = array[firstIndex] as T;
	array[firstIndex] = array[secondIndex] as T;
	array[secondIndex] = temp;
}

function pivot<T>(
	array: T[],
	pivotIndex = 0,
	endIndex = array.length - 1,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
) {
	let swapIndex = pivotIndex;

	for (let i = pivotIndex + 1; i <= endIndex; i++) {
		const compareResult = sortCompare(...criteria)(
			array[i] as T,
			array[pivotIndex] as T,
		);
		if (compareResult < 0) {
			swapIndex++;
			swap(array, swapIndex, i);
		}
	}

	swap(array, pivotIndex, swapIndex);

	return swapIndex;
}

const sort = <T>(
	array: T[],
	left = 0,
	right = array.length - 1,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
) => {
	if (left < right) {
		const pivotIndex = pivot(array, left, right, ...criteria);
		sort(array, left, pivotIndex - 1, ...criteria);
		sort(array, pivotIndex + 1, right, ...criteria);
	}

	return array;
};

/**
 * Creates new array sorted in ascending/descending order with single or multiple criteria.
 *
 * @example
 * ```ts
 * quickSort([1, 2, 3, 4], { order: 'desc' })
 * // => [4, 3, 2, 1]
 *
 * // --- Sorting by multiple properties ---
 * const array = [{ a: 2, b: 1 }, { a: 1, b: 2 }, { a: 1, b: 1 }];
 *
 * quickSort(array,
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
export function quickSort<T>(
	array: readonly T[] | ArrayLike<T>,
	...criteria: {
		order?: "asc" | "desc";
		by?: (item: T) => number | bigint | Date | string;
	}[]
): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];
	if (arr.length < 2) return arr;

	return sort([...arr], 0, arr.length - 1, ...criteria);
}
