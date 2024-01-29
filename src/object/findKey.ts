import type { PlainObject } from "../type/PlainObject";

/**
 * This method returns the key of the first element `predicate` returns truthy for.
 *
 * @example
 * ```ts
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findKey(users, ({ age }) => age < 40)
 * // => 'barney' (iteration order is not guaranteed)
 * ```
 *
 * @param object The object to inspect
 * @param predicate The function invoked per iteration
 * @template T The type of the input object
 * @template K The type of the keys of the input object
 * @returns The key of the matched element, else `undefined`.
 *
 * @category Object
 */
export function findKey<T extends PlainObject, K extends keyof T>(
	object: T,
	predicate: (value: T[K], key: K, self: T) => boolean,
): K | undefined {
	if (object == null) return undefined;

	for (const key in object)
		if (predicate(object[key as unknown as K], key as unknown as K, object))
			return key as unknown as K;

	return undefined;
}
