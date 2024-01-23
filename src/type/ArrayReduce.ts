/**
 * This type reduces an array to a single value.
 *
 * @example
 * ```ts
 * let arr = [1, 2, 3];
 * let reduced: ArrayReduce<typeof arr, number> = arr.reduce((acc, val) => acc + val);
 * // => 6
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayReduce<A extends unknown[], Acc> = A extends undefined
	? Acc extends undefined
		? undefined
		: Acc
	: A["length"] extends 0
	  ? Acc extends undefined
			? undefined
			: Acc
	  : Acc;
