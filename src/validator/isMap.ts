import { hasMapTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @example
 * ```ts
 * isMap(new Map)
 * // => true
 *
 * isMap(new WeakMap)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a map, else `false`
 *
 * @category Validator
 */
export function isMap<T>(
	value: T | {},
): value is T extends ReadonlyMap<any, any>
	? unknown extends T
		? never
		: ReadonlyMap<any, any>
	: Map<unknown, unknown> {
	return (
		types?.isMap?.(value) ||
		value instanceof Map ||
		(isObjectLike(value) && hasMapTag(value))
	);
}
