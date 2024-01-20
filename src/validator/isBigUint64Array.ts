import { hasBigUint64Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

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
 * @category Validator
 */
export function isBigUint64Array(value: unknown): value is BigUint64Array {
	return (
		types?.isBigUint64Array?.(value) ||
		(isObjectLike(value) && hasBigUint64Tag(value))
	);
}
