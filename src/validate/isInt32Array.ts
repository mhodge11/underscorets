import { hasInt32Tag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as an `Int32Array` object.
 *
 * @example
 * ```ts
 * isInt32Array(new Int32Array)
 * // => true
 *
 * isInt32Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an int32 array, else `false`
 *
 * @category Validate
 */
export function isInt32Array(value: unknown): value is Int32Array {
	return isObjectLike(value) && hasInt32Tag(value);
}
