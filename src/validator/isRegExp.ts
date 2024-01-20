import { hasRegExpTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

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
 * @category Validator
 */
export function isRegExp(value: unknown): value is RegExp {
	return (
		types?.isRegExp?.(value) ||
		value instanceof RegExp ||
		(isObjectLike(value) && hasRegExpTag(value))
	);
}
