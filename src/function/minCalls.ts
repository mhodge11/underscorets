import type { GenericFunction } from "../type/GenericFunction";

/**
 * Creates a function that invokes the given function once it's called more than `n` times.
 * Returns undefined until the minimum call count is reached.
 *
 * This function can be used as a decorator with {@link decMinCalls}.
 *
 * *Based on [moderndash.minCalls](https://moderndash.io/docs/minCalls).*
 *
 * @example
 * ```ts
 * const caution = () => console.log("Caution!");
 * const limitedCaution = minCalls(caution, 2);
 *
 * limitedCaution()
 * limitedCaution()
 * limitedCaution()
 * // => `caution` is invoked on the third call.
 * ```
 *
 * @param func The function to restrict
 * @param n The number of calls before the given function is invoked
 * @template T The type of the function
 * @returns Returns the new restricted function
 *
 * @category Function
 */
export function minCalls<T extends GenericFunction<T>>(
	func: T,
	n: number,
): (this: unknown, ...args: Parameters<T>) => ReturnType<T> | void {
	if (typeof func !== "function") throw new TypeError("Expected a function");

	let count = 1;

	return function (
		this: unknown,
		...args: Parameters<T>
	): ReturnType<T> | void {
		if (count > n) return func.apply(this, args);
		count += 1;
	};
}
