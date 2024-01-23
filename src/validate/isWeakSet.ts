import { hasWeakSetTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `WeakSet` object.
 *
 * @example
 * ```ts
 * isWeakSet(new WeakSet)
 * // => true
 *
 * isWeakSet(new Set)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a weak set, else `false`
 *
 * @category Validate
 */
export function isWeakSet(value: unknown): value is WeakSet<object> {
	return (
		types?.isWeakSet?.(value) ||
		value instanceof WeakSet ||
		(isObjectLike(value) && hasWeakSetTag(value))
	);
}
