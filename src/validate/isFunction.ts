/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @example
 * ```ts
 * isFunction(class Any{})
 * // => true
 *
 * isFunction(() => {})
 * // => true
 *
 * isFunction(async () => {})
 * // => true
 *
 * isFunction(function * Any() {})
 * // => true
 *
 * isFunction(Math.round)
 * // => true
 *
 * isFunction(/abc/)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a function, else `false`
 *
 * @category Validate
 */
export function isFunction(value: unknown): value is Function {
	return typeof value === "function";
}
