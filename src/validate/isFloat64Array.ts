import { hasFloat64Tag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as a `Float64Array` object.
 *
 * @example
 * ```ts
 * isFloat64Array(new Float64Array)
 * // => true
 *
 * isFloat64Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a float64 array, else `false`
 *
 * @category Validate
 */
export function isFloat64Array(value: unknown): value is Float64Array {
	return isObjectLike(value) && hasFloat64Tag(value);
}
