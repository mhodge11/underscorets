import { hasArgsTag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @example
 * ```ts
 * isArguments(function() { return arguments }())
 * // => true
 *
 * isArguments([1, 2, 3])
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an `arguments` object, else `false`
 *
 * @category Validate
 */
export function isArguments(value: unknown): value is IArguments {
	return isObjectLike(value) && hasArgsTag(value);
}
