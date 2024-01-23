import { isArrayLike } from "./isArrayLike";
import { isObjectLike } from "./isObjectLike";

/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @example
 * ```ts
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an array-like object, else `false`
 *
 * @category Validate
 */
export function isArrayLikeObject(
	value: unknown,
): value is ArrayLike<unknown> & object {
	return isArrayLike(value) && isObjectLike(value);
}
