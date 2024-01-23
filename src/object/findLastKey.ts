import type { PlainObject } from "../type/PlainObject.js";

/**
 * This method is like `{@link findKey}` except it returns the key of the last element `predicate` returns truthy for.
 *
 * @example
 * ```ts
 * const users = {
 *   'barney':  { 'age': 36, 'active': true },
 *   'fred':    { 'age': 40, 'active': false },
 *   'pebbles': { 'age': 1,  'active': true }
 * }
 *
 * findLastKey(users, ({ age }) => age < 40)
 * // => 'pebbles' (iteration order is not guaranteed)
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
export function findLastKey<T extends PlainObject, K extends keyof T>(
	object: T,
	predicate: (value: T[K], key: K, self: T) => boolean,
): K | undefined {
	if (object == null) return undefined;

	const keys = Object.keys(object);
	let { length } = keys;

	while (length--) {
		const key = keys[length] as string;
		if (predicate((object as any)[key], key as any, object)) return key as any;
	}

	return undefined;
}
