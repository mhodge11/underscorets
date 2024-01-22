/**
 * This type reverses the order of an array.
 *
 * @example
 * ```ts
 * type Foo = ReversedArray<[1, 2, 3]>;
 * // => [3, 2, 1]
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ReversedArray<A extends unknown[]> = A extends [
	infer Head,
	...infer Tail,
]
	? [...ReversedArray<Tail>, Head]
	: [];
