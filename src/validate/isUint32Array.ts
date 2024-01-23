import { hasUint32Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Uint32Array` typed array.
 *
 * @example
 * ```ts
 * isUint32Array(new Uint32Array)
 * // => true
 *
 * isUint32Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a `Uint32Array`, else `false`
 *
 * @category Validate
 */
export function isUint32Array(value: unknown): value is Uint32Array {
	return (
		types?.isUint32Array?.(value) ||
		(isObjectLike(value) && hasUint32Tag(value))
	);
}
