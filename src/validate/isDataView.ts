import { hasDataViewTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `DataView` object.
 *
 * @example
 * ```ts
 * isDataView(new DataView(new ArrayBuffer(2)))
 * // => true
 *
 * isDataView(new ArrayBuffer(2))
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a data view, else `false`
 *
 * @category Validate
 */
export function isDataView(value: unknown): value is DataView {
	return (
		types?.isDataView?.(value) ||
		value instanceof DataView ||
		(isObjectLike(value) && hasDataViewTag(value))
	);
}
