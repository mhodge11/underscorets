import type { PlainObject } from "../type/PlainObject";
import type { TypedArray } from "../type/TypedArray";

import { isArrayBuffer } from "./isArrayBuffer";
import { isDataView } from "./isDataView";
import { isDate } from "./isDate";
import { isMap } from "./isMap";
import { isPlainObject } from "./isPlainObject";
import { isRegExp } from "./isRegExp";
import { isSet } from "./isSet";
import { isTypedArray } from "./isTypedArray";

function isEqualArrayBuffers(a: ArrayBuffer, b: ArrayBuffer): boolean {
	return isEqualDataViews(new DataView(a), new DataView(b));
}

function isEqualArrays<A extends unknown[] | TypedArray>(a: A, b: A): boolean {
	if ("byteLength" in a && "byteLength" in b && a.byteLength !== b.byteLength)
		return false;

	if (a.length !== b.length) return false;

	return a.every((element, index) => isEqual(element, b[index]));
}

function isEqualDataViews(a: DataView, b: DataView): boolean {
	if (a.byteLength !== b.byteLength) return false;

	for (let i = 0; i < a.byteLength; i++)
		if (a.getUint8(i) !== b.getUint8(i)) return false;

	return true;
}

function isEqualDates(a: Date, b: Date): boolean {
	return a.getTime() === b.getTime();
}

function isEqualMaps(
	a: Map<unknown, unknown>,
	b: Map<unknown, unknown>,
): boolean {
	if (a.size !== b.size) return false;

	const aObj: PlainObject = Object.fromEntries(a);
	const bObj: PlainObject = Object.fromEntries(b);

	return isEqualObjects(aObj, bObj);
}

function isEqualObjects(a: PlainObject, b: PlainObject): boolean {
	// check if the objects have the same keys
	const keys1 = Object.keys(a);
	const keys2 = Object.keys(b);
	if (!isEqual(keys1, keys2)) return false;

	// check if the values of each key in the objects are equal
	for (const key of keys1) if (!isEqual(a[key], b[key])) return false;

	// the objects are deeply equal
	return true;
}

function isEqualRegExps(a: RegExp, b: RegExp): boolean {
	return a.toString() === b.toString();
}

function isEqualSets(a: Set<unknown>, b: Set<unknown>): boolean {
	if (a.size !== b.size) return false;

	return isEqualArrays([...a], [...b]);
}

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
