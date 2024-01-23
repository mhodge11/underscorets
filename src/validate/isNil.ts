/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @example
 * ```ts
 * isNil(null)
 * // => true
 *
 * isNil(void 0)
 * // => true
 *
 * isNil(NaN)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is nullish, else `false`
 *
 * @category Validate
 */
export function isNil(value: unknown): value is null | undefined {
	return value == null;
}
