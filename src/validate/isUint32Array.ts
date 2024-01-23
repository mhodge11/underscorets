import { hasUint32Tag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as a `Uint32Array` typed array.
 *
 * @example
 * ```ts
 * isUint32Array(new Uint32Array)
 * // => true
 *
 * isUint32Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a `Uint32Array`, else `false`
 *
 * @category Validate
 */
export function isUint32Array(value: unknown): value is Uint32Array {
	return isObjectLike(value) && hasUint32Tag(value);
}
