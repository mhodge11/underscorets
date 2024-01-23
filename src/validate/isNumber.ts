import { hasNumberTag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

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
 * @category Validate
 */
export function isNumber(value: unknown): value is number | Number {
	return (
		typeof value === "number" ||
		value instanceof Number ||
		(isObjectLike(value) && hasNumberTag(value))
	);
}
