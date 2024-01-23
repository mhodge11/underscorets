/**
 * Checks if `value` is a buffer.
 *
 * *Note: This function is only available if the Buffer API is available.*
 *
 * @example
 * ```ts
 * isBuffer(Buffer.alloc(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a buffer, else `false`
 *
 * @category Validate
 */
export function isBuffer(value: unknown): value is Buffer {
	return Buffer?.isBuffer(value);
}
