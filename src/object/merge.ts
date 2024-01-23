import type { ArrayMinLength } from "../type/ArrayMinLength.ts";
import type { ObjectMerge } from "../type/ObjectMerge.ts";
import type { PlainObject } from "../type/PlainObject.ts";

import { isPlainObject } from "../validate/isPlainObject.ts";

/**
 * This function combines two or more objects into a single new object. Arrays and other types are overwritten.
 *
 * *Based on [moderndash.merge](https://moderndash.io/docs/merge).*
 *
 * @example
 * ```ts
 * // ---- Nested objects are merged ----
 * merge({ a: 1 }, { b: 2 }, { c: 3, d: { e: 4 } })
 * // => { a: 1, b: 2, c: 3, d: { e: 4 } }
 *
 * // ---- Other types are overwritten ----
 * merge({ a: [1, 2] }, { a: [3, 4] })
 * // => { a: [3, 4] }
 *
 * merge({ a: 1 }, { a: "Yes" })
 * // => { a: "Yes" }
 * ```
 *
 * @param target The target object
 * @param sources The source objects
 * @template T The type of the target object
 * @template S The type of the source objects
 * @returns A new merged object
 *
 * @category Object
 */
export function merge<
	T extends PlainObject,
	S extends ArrayMinLength<PlainObject, 1>,
>(target: T, ...sources: S): ObjectMerge<[T, ...S]> {
	const targetCopy = { ...target };

	for (const source of sources)
		for (const [key, value] of Object.entries(source))
			(targetCopy as PlainObject)[key] =
				isPlainObject(value) && isPlainObject(targetCopy[key])
					? merge(targetCopy[key] as PlainObject, value)
					: value;

	return targetCopy as ObjectMerge<[T, ...S]>;
}
