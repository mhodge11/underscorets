import { hasStringTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @example
 * ```ts
 * isString('abc')
 * // => true
 *
 * isString(1)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a string, else `false`
 *
 * @category Validator
 */
export function isString(value: unknown): value is string | String {
	const type = typeof value;
	return (
		type === "string" ||
		types?.isStringObject?.(value) ||
		value instanceof String ||
		(isObjectLike(value) && !Array.isArray(value) && hasStringTag(value))
	);
}
