/**
 * This type reverses the order of an array.
 *
 * @example
 * ```ts
 * type Foo = ArrayReverse<[1, 2, 3]>;
 * // => [3, 2, 1]
 * ```
 *
 * @template A The type of the array
 *
 * @category Type
 */
export type ArrayReverse<A extends unknown[]> = A extends [
	infer Head,
	...infer Tail,
]
	? [...ArrayReverse<Tail>, Head]
	: [];
