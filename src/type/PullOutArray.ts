/**
 * This type pulls out the element type of an array or array-like object
 * out of a nested array.
 *
 * @example
 * ```ts
 * type Foo = PullOutArray<[1, 2, 3][]>;
 * // => [1, 2, 3]
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type PullOutArray<A extends unknown[][] | ArrayLike<unknown>[]> =
	A extends unknown[][]
		? A[number]
		: A extends ArrayLike<infer U>[]
		  ? U[][][number]
		  : unknown[];
