import { hasUint8ClampedTag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as a `Uint8ClampedArray` object.
 *
 * @example
 * ```ts
 * isUint8ClampedArray(new Uint8ClampedArray)
 * // => true
 *
 * isUint8ClampedArray([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a uint8 clamped array, else `false`
 *
 * @category Validate
 */
export function isUint8ClampedArray(
	value: unknown,
): value is Uint8ClampedArray {
	return isObjectLike(value) && hasUint8ClampedTag(value);
}
