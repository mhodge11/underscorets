import { hasUint8ClampedTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

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
	return (
		types?.isUint8ClampedArray?.(value) ||
		(isObjectLike(value) && hasUint8ClampedTag(value))
	);
}
