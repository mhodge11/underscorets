import type { PlainObject } from "../type/PlainObject.js";

/**
 * Iterates over properties of `object`, returning an object with all elements
 * `predicate` returns truthy for.
 *
 * @example
 * ```ts
 * const object = { 'a': 5, 'b': 8, 'c': 10 }
 * filterObject(object, (n) => !(n % 5))
 * // => { 'a': 5, 'c': 10 }
 * ```
 *
 * @param object The object to iterate over
 * @param predicate The function invoked per iteration
 * @template T The type of the input object
 * @template K The type of the keys of the input object
 * @returns The new filtered array
 *
 * @category Object
 */
export function filterObject<T extends PlainObject, K extends keyof T>(
	object: T,
	predicate: (value: T[K], key: K, self: T) => boolean,
): Partial<T> {
	if (object == null) return {};

	const result: Partial<T> = {};

	for (const key in object)
		if (predicate((object as any)[key], key as any, object))
			result[key] = (object as any)[key];

	return result;
}
