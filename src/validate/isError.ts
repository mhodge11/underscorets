import { hasDomExceptionTag, hasErrorTag } from "../helpers/getTag";
import { isObjectLike } from "./isObjectLike";

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
 * @category Validate
 */
export function isError(value: unknown): value is DOMException | Error {
	if (!isObjectLike(value)) return false;

	return (
		value instanceof Error ||
		value instanceof DOMException ||
		hasDomExceptionTag(value) ||
		hasErrorTag(value)
	);
}
