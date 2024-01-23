import { hasArrayBufferTag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as an `ArrayBuffer` object.
 *
 * @example
 * ```ts
 * isArrayBuffer(new ArrayBuffer(2))
 * // => true
 *
 * isArrayBuffer(new Array(2))
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an array buffer, else `false`
 *
 * @category Validate
 */
export function isArrayBuffer(value: unknown): value is ArrayBuffer {
	return (
		value instanceof ArrayBuffer ||
		(isObjectLike(value) && hasArrayBufferTag(value))
	);
}
