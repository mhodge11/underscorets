import { hasInt16Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as an `Int16Array` object.
 *
 * @example
 * ```ts
 * isInt16Array(new Int16Array)
 * // => true
 *
 * isInt16Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an int16 array, else `false`
 *
 * @category Validate
 */
export function isInt16Array(value: unknown): value is Int16Array {
	return (
		types?.isInt16Array?.(value) || (isObjectLike(value) && hasInt16Tag(value))
	);
}
