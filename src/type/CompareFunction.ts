/**
 * This type defines a function that compares two values.
 * It is specifically designed to be used in by rest arguments that are arrays.
 *
 * @example
 * ```ts
 * const compare: CompareFunction<[number, number]> = (a, b) => a > b;
 * ```
 *
 * @template A The type of the arrays
 *
 * @category Type
 */
export type CompareFunction<A extends unknown[][] | ArrayLike<unknown>[]> = (
	a: A[number][number],
	b: A[number][number],
) => boolean;
