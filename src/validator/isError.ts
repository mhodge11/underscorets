import { hasDomExceptionTag, hasErrorTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, `URIError`, or `DOMException` object.
 *
 * @example
 * ```ts
 * isError(new Error)
 * // => true
 *
 * isError(Error)
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is an error object, else `false`
 *
 * @category Validator
 */
export function isError(value: unknown): value is DOMException | Error {
	if (!isObjectLike(value)) return false;

	return (
		types?.isNativeError?.(value) ||
		value instanceof Error ||
		value instanceof DOMException ||
		hasDomExceptionTag(value) ||
		hasErrorTag(value)
	);
}
