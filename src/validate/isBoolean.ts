import { hasBoolTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Boolean` primitive or object.
 *
 * @example
 * ```ts
 * isBoolean(false)
 * // => true
 *
 * isBoolean(new Boolean(false))
 * // => true
 *
 * isBoolean(0)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a boolean, else `false`
 *
 * @category Validate
 */
export function isBoolean(value: unknown): value is boolean | Boolean {
	return (
		value === true ||
		value === false ||
		typeof value === "boolean" ||
		types?.isBooleanObject?.(value) ||
		value instanceof Boolean ||
		(isObjectLike(value) && hasBoolTag(value))
	);
}
