import type { ToArray } from "../type/ToArray";

import { arrayLikeValues } from "../helpers/arrayLikeValues";
import { copyArray } from "../helpers/copyArray";
import { stringToArray } from "../helpers/stringToArray";
import { values as objectValues } from "../object/values";
import { isArrayLike } from "../validate/isArrayLike";
import { isPlainObject } from "../validate/isPlainObject";
import { isString } from "../validate/isString";

function iteratorToArray<T>(iterator: Iterator<T> | IterableIterator<T>): T[] {
	let data: IteratorResult<T>;
	const array: T[] = [];

	while (!(data = iterator.next()).done) array.push(data.value);

	return array;
}

/**
 * Converts `value` to an array.
 *
 * @example
 * ```ts
 * toArray({ 'a': 1, 'b': 2 })
 * // => [1, 2]
 *
 * toArray('abc')
 * // => ['a', 'b', 'c']
 *
 * toArray(1)
 * // => []
 *
 * toArray(null)
 * // => []
 * ```
 *
 * @param value The value to convert
 * @returns The converted array
 *
 * @category Misc
 */
export function toArray<T>(value: T): ToArray<T> {
	if (value == null) return [];

	if (isArrayLike(value)) {
		if (isString(value))
			return stringToArray(
				value instanceof String ? value.toString() : value,
			) as ToArray<T>;

		const array = arrayLikeValues(value);
		return copyArray(array) as ToArray<T>;
	}

	if (typeof value === "object" && Symbol.iterator in value)
		return iteratorToArray((value as any)[Symbol.iterator]());

	if (isPlainObject(value)) return objectValues(value) as ToArray<T>;

	return [];
}
