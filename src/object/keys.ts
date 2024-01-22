import type { ObjectKeys } from "../types/ObjectKeys.ts";
import type { PlainObject } from "../types/PlainObject.ts";

/**
 * Creates an array of the own enumerable string keyed property names of `object`.
 *
 * @example
 * ```ts
 * keys({ 'a': 1, 'b': 2, 'c': 3 })
 * // => ['a', 'b', 'c']
 * ```
 *
 * @param object The object to query
 * @template T The type of the object
 * @returns An array of `object's` keys
 *
 * @category Object
 */
export function keys<T extends PlainObject>(object: T): ObjectKeys<T> {
	const keys: string[] = [];
	for (const key in object) keys.push(key);
	return keys as ObjectKeys<T>;
}
