import { hasDateTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Date` object.
 *
 * @example
 * ```ts
 * isDate(new Date)
 * // => true
 *
 * isDate('Mon April 23 2012')
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a date object, else `false`
 *
 * @category Validator
 */
export function isDate(value: unknown): value is Date {
	return (
		types?.isDate?.(value) ||
		value instanceof Date ||
		(isObjectLike(value) && hasDateTag(value))
	);
}
