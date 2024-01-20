/**
 * Checks if `value` is `null`.
 *
 * @example
 * ```ts
 * isNull(null)
 * // => true
 *
 * isNull(void 0)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is `null`, else `false`
 *
 * @category Validator
 */
export function isNull(value: unknown): value is null {
	return value === null;
}
