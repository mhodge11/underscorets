import { arrayLikeToArray } from "./utils";

/**
 * Creates an object with counts of occurrences of items in the array.
 *
 * @example
 * ```ts
 * const users = [
 *   { 'user': 'barney', 'active': true, age: 36 },
 *   { 'user': 'betty', 'active': false, age: 36 },
 *   { 'user': 'fred', 'active': true, age: 40 }
 * ]
 *
 * count(users, value => value.active ? 'active' : 'inactive');
 * // => { 'active': 2, 'inactive': 1 }
 *
 * count(users, value => value.age);
 * // => { 36: 2, 40: 1 }
 * ```
 *
 * @param array The array or record to iterate over
 * @param criteria The criteria to count by
 * @template T The type of the array elements
 * @template K The type of the criteria keys
 * @returns The composed aggregate object
 *
 * @category Array
 */
export function count<T, K extends PropertyKey>(
	array: readonly T[] | ArrayLike<T>,
	criteria: (value: T) => K,
): Record<K, number> {
	if (!array?.length) return {} as Record<K, number>;

	const arr = arrayLikeToArray(array);
	const object = {} as Record<K, number>;

	for (const value of arr) {
		const key = criteria(value);
		object[key] = (object[key] ?? 0) + 1;
	}

	return object;
}
