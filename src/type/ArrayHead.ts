/**
 * This type gets the first element of an array.
 *
 * @example
 * ```ts
 * let arr = ["a", "b", "c"];
 * let head: Head<typeof arr> = arr[0];
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayHead<A extends unknown[]> = A extends [infer Head, ...infer _]
	? Head
	: never;
