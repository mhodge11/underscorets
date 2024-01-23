/**
 * This type gets the tail of an array.
 *
 * @example
 * ```ts
 * let arr = ["a", "b", "c"];
 * let tail: Tail<typeof arr> = arr.slice(1);
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayTail<A extends unknown[]> = A extends [infer _, ...infer Tail]
	? Tail
	: never;
