import { isLength } from "./isLength";

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @example
 * ```ts
 * isArrayLike([1, 2, 3])
 * // => true
 *
 * isArrayLike(document.body.children)
 * // => true
 *
 * isArrayLike('abc')
 * // => true
 *
 * isArrayLike(Function)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is array-like, else `false`
 *
 * @category Validator
 */
export function isArrayLike(value: unknown): value is ArrayLike<unknown> {
	return (
		value != null &&
		typeof value !== "function" &&
		isLength((value as any)?.length)
	);
}
