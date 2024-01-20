import { hasFloat64Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

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
 * @category Validator
 */
export function isFloat64Array(value: unknown): value is Float64Array {
	return (
		types?.isFloat64Array?.(value) ||
		(isObjectLike(value) && hasFloat64Tag(value))
	);
}
