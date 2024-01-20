import type { GenericFunction } from "../types/GenericFunction.ts";
import type { ReversedArray } from "../types/ReversedArray.ts";

/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @example
 * ```ts
 * const flipped = flip((...args) => args)
 *
 * flipped('a', 'b', 'c', 'd')
 * // => ['d', 'c', 'b', 'a']
 * ```
 *
 * @param func The function to flip arguments for
 * @template T The type of the function
 * @returns The new flipped function
 */
export function flip<T extends GenericFunction<T>>(
	func: T,
): (
	this: any,
	...unknown: [...Parameters<T>]
) => ReturnType<(...args: ReversedArray<[...Parameters<T>]>) => ReturnType<T>> {
	if (typeof func !== "function")
		throw new TypeError("Argument must be a function");

	return function (
		this: unknown,
		...args: [...Parameters<T>]
	): ReturnType<(...args: ReversedArray<[...Parameters<T>]>) => ReturnType<T>> {
		return func.apply(this, args.reverse() as any);
	};
}
