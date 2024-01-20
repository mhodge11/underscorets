import { stringSize } from "../string/size.ts";
import { isArrayLike } from "../validator/isArrayLike.ts";
import { isMap } from "../validator/isMap.ts";
import { isSet } from "../validator/isSet.ts";
import { isString } from "../validator/isString.ts";

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @example
 * ```ts
 * size([1, 2, 3])
 * // => 3
 *
 * size({ 'a': 1, 'b': 2 })
 * // => 2
 *
 * size('pebbles')
 * // => 7
 * ```
 *
 * @param value The collection to inspect
 * @returns The `value` size
 */
export function size(value: object | string): number {
	if (value == null) return 0;

	if (isArrayLike(value))
		return isString(value)
			? stringSize(value instanceof String ? value.valueOf() : value)
			: value.length;

	if (isMap(value) || isSet(value)) return value.size;

	return Object.keys(value).length;
}
