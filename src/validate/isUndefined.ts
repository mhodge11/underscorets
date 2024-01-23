/**
 * Checks if `value` is `undefined`.
 *
 * @example
 * ```ts
 * isUndefined(void 0)
 * // => true
 *
 * isUndefined(null)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is `undefined`, else `false`
 *
 * @category Validate
 */
export function isUndefined(value: unknown): value is undefined {
	return value === undefined;
}
