import { hasFloat32Tag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Float32Array` object.
 *
 * @example
 * ```ts
 * isFloat32Array(new Float32Array)
 * // => true
 *
 * isFloat32Array([])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a float32 array, else `false`
 *
 * @category Validate
 */
export function isFloat32Array(value: unknown): value is Float32Array {
	return (
		types?.isFloat32Array?.(value) ||
		(isObjectLike(value) && hasFloat32Tag(value))
	);
}
