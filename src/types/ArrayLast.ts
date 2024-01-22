/**
 * This type gets the last element of an array.
 *
 * @example
 * ```ts
 * let arr = ["a", "b", "c"];
 * let last: Last<typeof arr> = arr[arr.length - 1];
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayLast<A extends unknown[]> = A extends [...any, infer Last]
	? Last
	: never;
