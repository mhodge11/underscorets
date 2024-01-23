import { hasFloat32Tag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

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
	return isObjectLike(value) && hasFloat32Tag(value);
}
