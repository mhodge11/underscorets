import { isLength } from "./isLength";

/**
 * Checks if `value` is array.
 *
 * @example
 * ```ts
 * isArray([1, 2, 3])
 * // => true
 *
 * isArray('abc')
 * // => false
 *
 * isArray(Function)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is array, else `false`
 *
 * @category Validate
 */
export function isArray(value: unknown): value is unknown[] {
	return Array.isArray(value) && isLength(value.length);
}
