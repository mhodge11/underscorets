/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @example
 * ```ts
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is object-like, else `false`
 *
 * @category Validator
 */
export function isObjectLike(value: unknown): value is object {
	return typeof value === "object" && value != null;
}
