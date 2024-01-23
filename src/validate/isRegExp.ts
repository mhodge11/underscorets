import { hasRegExpTag } from "../helpers/getTag.js";
import { isObjectLike } from "./isObjectLike.js";

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @example
 * ```ts
 * isRegExp(/abc/)
 * // => true
 *
 * isRegExp('/abc/')
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a regexp, else `false`
 *
 * @category Validate
 */
export function isRegExp(value: unknown): value is RegExp {
	return (
		value instanceof RegExp || (isObjectLike(value) && hasRegExpTag(value))
	);
}
