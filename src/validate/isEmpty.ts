import { isArray } from "./isArray.ts";
import { isMap } from "./isMap.ts";
import { isNil } from "./isNil.ts";
import { isObjectLike } from "./isObjectLike.ts";
import { isSet } from "./isSet.ts";
import { isString } from "./isString.ts";

/**
 * Checks if a value is empty.
 *
 * *Supports: strings, arrays, objects, maps, sets, typed arrays.*
 *
 * @example
 * ```ts
 * isEmpty(null)
 * // => true
 *
 * isEmpty({})
 * // => true
 *
 * isEmpty("")
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is empty, else `false`
 *
 * @category Validate
 */
export function isEmpty(value: unknown) {
	if (isNil(value)) return true;

	if (isString(value) || isArray(value)) return value.length === 0;

	if (isMap(value) || isSet(value)) return value.size === 0;

	if (ArrayBuffer.isView(value)) return value.byteLength === 0;

	if (isObjectLike(value)) return Object.keys(value).length === 0;

	return false;
}
