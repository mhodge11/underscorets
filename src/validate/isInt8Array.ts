import { hasInt8Tag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as an `Int8Array` object.
 *
 * @example
 * ```ts
 * isInt8Array(new Int8Array)
 * // => true
 *
 * isInt8Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an int8 array, else `false`
 *
 * @category Validate
 */
export function isInt8Array(value: unknown): value is Int8Array {
	return isObjectLike(value) && hasInt8Tag(value);
}
