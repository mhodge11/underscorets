import type { ObjectValues } from "../type/ObjectValues.js";
import type { PlainObject } from "../type/PlainObject.js";

import { keys } from "./keys.js";

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * @example
 * ```ts
 * values({ 'a': 1, 'b': 2, 'c': 3 })
 * // => [1, 2, 3]
 * ```
 *
 * @param object The object to query
 * @template T The type of the object
 * @returns An array of `object's` values
 *
 * @category Object
 */
export function values<T extends PlainObject>(object: T): ObjectValues<T> {
	if (object == null) return [];

	const props = keys(object);
	if (props.length === 0) return [];

	return props.map((key) => object[key]) as ObjectValues<T>;
}
