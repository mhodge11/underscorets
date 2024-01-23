import { isEqualArrayBuffers } from "../helpers/isEqualArrayBuffers";
import { isEqualArrays } from "../helpers/isEqualArrays";
import { isEqualDataViews } from "../helpers/isEqualDataViews";
import { isEqualDates } from "../helpers/isEqualDates";
import { isEqualMaps } from "../helpers/isEqualMaps";
import { isEqualObjects } from "../helpers/isEqualObjects";
import { isEqualRegExps } from "../helpers/isEqualRegExps";
import { isEqualSets } from "../helpers/isEqualSets";
import { isArrayBuffer } from "./isArrayBuffer";
import { isDataView } from "./isDataView";
import { isDate } from "./isDate";
import { isMap } from "./isMap";
import { isPlainObject } from "./isPlainObject";
import { isRegExp } from "./isRegExp";
import { isSet } from "./isSet";
import { isTypedArray } from "./isTypedArray";

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * *Supports: primitives, arrays, objects, dates, regexes, maps, sets, buffers, typed arrays*
 *
 * @example
 * ```ts
 * const object = { a: { b: 2 } };
 * const other = { a: { b: 2 } };
 *
 * isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 * ```
 *
 * @param a The value to compare
 * @param b The other value to compare
 * @returns `true` if the values are equivalent, else `false`
 *
 * @category Validate
 */
export function isEqual(a: unknown, b: unknown): boolean {
	if (Object.is(a, b)) return true;
	if (typeof a !== typeof b) return false;

	if (Array.isArray(a) && Array.isArray(b)) return isEqualArrays(a, b);
	if (isDate(a) && isDate(b)) return isEqualDates(a, b);
	if (isRegExp(a) && isRegExp(b)) return isEqualRegExps(a, b);
	if (isPlainObject(a) && isPlainObject(b)) return isEqualObjects(a, b);
	if (isArrayBuffer(a) && isArrayBuffer(b)) return isEqualArrayBuffers(a, b);
	if (isDataView(a) && isDataView(b)) return isEqualDataViews(a, b);
	if (isTypedArray(a) && isTypedArray(b)) return isEqualArrays(a, b);
	if (isMap(a) && isMap(b)) return isEqualMaps(a, b);
	if (isSet(a) && isSet(b)) return isEqualSets(a, b);

	return false;
}
