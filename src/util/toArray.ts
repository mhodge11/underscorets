import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";
import { copyArray } from "../helpers/copyArray.ts";
import { iteratorToArray } from "../helpers/iteratorToArray.ts";
import { stringToArray } from "../helpers/stringToArray.ts";
import { values as objectValues } from "../object/values.ts";
import { isArrayLike } from "../validator/isArrayLike.ts";
import { isPlainObject } from "../validator/isPlainObject.ts";
import { isString } from "../validator/isString.ts";

type Item<T> = T extends ArrayLike<infer U>
	? U
	: T extends unknown[]
	  ? T[number]
	  : T extends Map<infer K, infer V>
		  ? [K, V]
		  : T extends Set<infer U>
			  ? U
			  : T extends Record<PropertyKey, infer V>
				  ? V
				  : T extends Iterable<[unknown, infer U]>
					  ? U
					  : T extends IterableIterator<[unknown, infer U]>
						  ? U
						  : unknown;

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
 * @category Util
 */
export function toArray<T>(value: T): Item<T>[] {
	if (value == null) return [];

	if (isArrayLike(value)) {
		if (isString(value))
			return stringToArray(
				value instanceof String ? value.toString() : value,
			) as Item<T>[];

		const array = arrayLikeValues(value);
		return copyArray(array) as Item<T>[];
	}

	if (typeof value === "object" && Symbol.iterator in value)
		return iteratorToArray((value as any)[Symbol.iterator]());

	if (isPlainObject(value)) return objectValues(value) as Item<T>[];

	return [];
}
