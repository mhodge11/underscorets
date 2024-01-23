import type { TypedArray } from "../type/TypedArray.js";

import { hasTypedArrayTag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as a typed array.
 *
 * @example
 * ```ts
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a typed array, else `false`
 *
 * @category Validate
 */
export function isTypedArray(value: unknown): value is TypedArray {
	return isObjectLike(value) && hasTypedArrayTag(value);
}
