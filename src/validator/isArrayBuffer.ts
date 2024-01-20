import { hasArrayBufferTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

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
 * @category Validator
 */
export function isArrayBuffer(value: unknown): value is ArrayBuffer {
	return (
		types?.isArrayBuffer?.(value) ||
		value instanceof ArrayBuffer ||
		(isObjectLike(value) && hasArrayBufferTag(value))
	);
}
