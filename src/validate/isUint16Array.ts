import { hasUint16Tag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

/**
 * Checks if `value` is classified as a `Uint16Array` typed array.
 *
 * @example
 * ```ts
 * isUint16Array(new Uint16Array)
 * // => true
 *
 * isUint16Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a `Uint16Array`, else `false`
 *
 * @category Validate
 */
export function isUint16Array(value: unknown): value is Uint16Array {
	return isObjectLike(value) && hasUint16Tag(value);
}
