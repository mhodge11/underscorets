type BuildArrayMinLength<
	T,
	MinLength extends number,
	Current extends T[],
> = Current["length"] extends MinLength
	? [...Current, ...T[]]
	: BuildArrayMinLength<T, MinLength, [...Current, T]>;

/**
 * This type builds an array with a minimum length.
 *
 * @example
 * ```ts
 * let arr: ArrayMinLength<number, 3> = [1, 2, 3];
 * // => OK
 *
 * arr = [1, 2];
 * // => Type '[number, number]' is not assignable to type '[number, number, number, ...number[]]'.
 * ```
 *
 * @template T The type of the array elements
 * @template MinLength The minimum length of the array
 *
 * @category Type
 */
export type ArrayMinLength<T, MinLength extends number> = BuildArrayMinLength<
	T,
	MinLength,
	[]
>;
