import type { $, O } from "hotscript";
import type { PlainObject } from "../types/PlainObject.ts";

import { isPlainObject } from "../validator/isPlainObject.ts";

type StringIfNever<T> = [T] extends [never] ? string : T;
type Paths<T> = StringIfNever<$<O.AllPaths, T>>;

const addToResult = (
	prefix: string,
	value: unknown,
	flatObject: Record<string, unknown>,
) => {
	if (isPlainObject(value)) {
		const flatObj = flatKeys(value);
		for (const [k, v] of Object.entries(flatObj))
			flatObject[`${prefix}.${k}`] = v;
	} else if (Array.isArray(value))
		for (const [i, v] of value.entries())
			addToResult(`${prefix}[${i}]`, v, flatObject);
	else flatObject[prefix] = value;
};

/**
 * Flattens an object into a single level object.
 *
 * These keys can be used with `{@link at}`, `{@link get}` and `{@link set}`.
 *
 * @example
 * ```ts
 * const obj = { a: { b: 2, c: [{ d: 3 }, { d: 4 }] } };
 * flatKeys(obj);
 * // => { 'a.b': 2, 'a.c[0].d': 3, 'a.c[1].d': 4 }
 * ```
 *
 * @param obj The object to flatten
 * @template T The type of the object to flatten
 * @returns A new object with flattened keys
 *
 * @category Object
 */
export function flatKeys<T extends PlainObject>(
	object: T,
): Record<Paths<T>, unknown> {
	const flatObject: Record<string, unknown> = {};
	for (const [k, v] of Object.entries(object)) addToResult(k, v, flatObject);
	return flatObject;
}
