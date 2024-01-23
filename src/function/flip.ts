import type { ArrayReverse } from "../type/ArrayReverse.js";
import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * *Based on [lodash.flip](https://lodash.com/docs/4.17.15#flip).*
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
 *
 * @category Function
 */
export function flip<T extends GenericFunction<T>>(
	func: T,
): (
	this: any,
	...unknown: [...Parameters<T>]
) => ReturnType<(...args: ArrayReverse<[...Parameters<T>]>) => ReturnType<T>> {
	if (typeof func !== "function")
		throw new TypeError("Argument must be a function");

	return function (
		this: unknown,
		...args: [...Parameters<T>]
	): ReturnType<(...args: ArrayReverse<[...Parameters<T>]>) => ReturnType<T>> {
		return func.apply(this, args.reverse() as any);
	};
}
