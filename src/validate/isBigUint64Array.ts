import { hasBigUint64Tag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

/**
 * Checks if `value` is classified as a `BigUint64Array` object.
 *
 * @example
 * ```ts
 * isBigUint64Array(new BigUint64Array)
 * // => true
 *
 * isBigUint64Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a big uint 64 array, else `false`
 *
 * @category Validate
 */
export function isBigUint64Array(value: unknown): value is BigUint64Array {
	return isObjectLike(value) && hasBigUint64Tag(value);
}
