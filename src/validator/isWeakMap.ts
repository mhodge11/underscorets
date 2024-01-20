import { hasWeakMapTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @example
 * ```ts
 * isWeakMap(new WeakMap)
 * // => true
 *
 * isWeakMap(new Map)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a weak map, else `false`
 *
 * @category Validator
 */
export function isWeakMap(value: unknown): value is WeakMap<object, unknown> {
	return (
		types?.isWeakMap?.(value) ||
		value instanceof WeakMap ||
		(isObjectLike(value) && hasWeakMapTag(value))
	);
}
