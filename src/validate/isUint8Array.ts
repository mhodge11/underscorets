import { hasUint8Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Uint8Array` object.
 *
 * @example
 * ```ts
 * isUint8Array(new Uint8Array)
 * // => true
 *
 * isUint8Array(new Float32Array)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a uint8 array, else `false`
 *
 * @category Validate
 */
export function isUint8Array(value: unknown): value is Uint8Array {
	return (
		types?.isUint8Array?.(value) || (isObjectLike(value) && hasUint8Tag(value))
	);
}
