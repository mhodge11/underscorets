import type { PlainObject } from "../type/PlainObject";

import { difference } from "../array/difference";
import { pick } from "./pick";

/**
 * Omit specified keys from an object
 *
 * *Based on [moderndash.omit](https://moderndash.io/docs/omit).*
 *
 * @example
 * ```ts
 * const obj = {a: 1, b: 2, c: 3};
 * omit(obj, ['a', 'b']);
 * // => {c: 3}
 * ```
 *
 * @param obj The object to filter
 * @param keysToOmit The keys to exclude from the returned object
 * @template T The type of the object
 * @returns A new object without the specified keys
 *
 * @category Object
 */
export function omit<T extends PlainObject, K extends keyof T>(
	object: T,
	keysToOmit: K[],
): Omit<T, K> {
	const allKeys = Object.keys(object);
	const filteredKeys = difference(allKeys, keysToOmit as string[]) as Exclude<
		keyof T,
		K
	>[];
	return pick(object, filteredKeys);
}
