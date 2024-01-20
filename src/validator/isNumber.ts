import { hasNumberTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * @example
 * ```ts
 * isNumber(3)
 * // => true
 *
 * isNumber(Number.MIN_VALUE)
 * // => true
 *
 * isNumber(Infinity)
 * // => true
 *
 * isNumber('3')
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a number, else `false`
 *
 * @category Validator
 */
export function isNumber(value: unknown): value is number | Number {
	return (
		typeof value === "number" ||
		types?.isNumberObject?.(value) ||
		value instanceof Number ||
		(isObjectLike(value) && hasNumberTag(value))
	);
}
