import { hasSetTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @example
 * ```ts
 * isSet(new Set)
 * // => true
 *
 * isSet(new WeakSet)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a set, else `false`
 *
 * @category Validate
 */
export function isSet(value: unknown): value is Set<unknown> {
	return (
		types?.isSet?.(value) ||
		value instanceof Set ||
		(isObjectLike(value) && hasSetTag(value))
	);
}
