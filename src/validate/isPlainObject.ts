import type { PlainObject } from "../type/PlainObject";

import { hasObjectTag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

/**
 * Checks if the value is a plain object.
 *
 * Refers to the {@link PlainObject} type.
 *
 * @example
 * ```ts
 * isPlainObject({})
 * // => true
 *
 * isPlainObject({ a: 1 })
 * // => true
 *
 * isPlainObject(null)
 * // => false
 *
 * isPlainObject('1')
 * // => false
 *
 * isPlainObject([])
 * // => false
 *
 * isPlainObject(new Function())
 * // => false
 *
 * isPlainObject(new Date())
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a plain object, else `false`
 *
 * @category Validate
 */
export function isPlainObject(value: unknown): value is PlainObject {
	if (!isObjectLike(value) || !hasObjectTag(value)) return false;
	return value?.constructor === Object;
}
