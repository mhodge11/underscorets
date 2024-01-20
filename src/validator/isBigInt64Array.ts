import { hasBigInt64Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `BigInt64Array` object.
 *
 * @example
 * ```ts
 * isBigInt64Array(new BigInt64Array())
 * // => true
 *
 * isBigInt64Array(new Array(2))
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a big int 64 array, else `false`
 *
 * @category Validator
 */
export function isBigInt64Array(value: unknown): value is BigInt64Array {
	return (
		types?.isBigInt64Array?.(value) ||
		(isObjectLike(value) && hasBigInt64Tag(value))
	);
}
