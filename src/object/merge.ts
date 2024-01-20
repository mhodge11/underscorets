import type { ArrayMinLength } from "../types/ArrayMinLength.ts";
import type { PlainObject } from "../types/PlainObject.ts";

import { isPlainObject } from "../validator/isPlainObject.ts";

type OptionalPropertyNames<T> = {
	[K in keyof T]-?: PlainObject extends { [P in K]: T[K] } ? K : never;
}[keyof T];

type SpreadProperties<L, R, K extends keyof L & keyof R> = {
	[P in K]: L[P] | Exclude<R[P], undefined>;
};

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type SpreadTwo<L, R> = Id<
	Pick<L, Exclude<keyof L, keyof R>> &
		Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> &
		Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> &
		SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

type MergeDeepObjects<A extends readonly [...unknown[]]> = A extends [
	infer L,
	...infer R,
]
	? SpreadTwo<L, MergeDeepObjects<R>>
	: unknown;

/**
 * This function combines two or more objects into a single new object. Arrays and other types are overwritten.
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
>(target: T, ...sources: S): MergeDeepObjects<[T, ...S]> {
	const targetCopy = { ...target };

	for (const source of sources)
		for (const [key, value] of Object.entries(source))
			(targetCopy as PlainObject)[key] =
				isPlainObject(value) && isPlainObject(targetCopy[key])
					? merge(targetCopy[key] as PlainObject, value)
					: value;

	return targetCopy as MergeDeepObjects<[T, ...S]>;
}
