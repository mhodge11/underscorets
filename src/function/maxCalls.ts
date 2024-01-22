import type { GenericFunction } from "../types/GenericFunction.ts";

/**
 * Creates a function that invokes the given function as long as it's called `<= n` times.
 *
 * Subsequent calls to the created function return the result of the last `func` invocation.
 *
 * This function can be used as a decorator with {@link decMaxCalls}.
 *
 * *Based on [moderndash.maxCalls](https://moderndash.io/docs/maxCalls).*
 *
 * @example
 * ```ts
 * let count = 0;
 * const addCount = () => ++count;
 *
 * // Allow addCount to be invoked twice.
 * const limitAddCount = maxCalls(addCount, 2)
 *
 * limitAddCount() // => 1
 * limitAddCount() // => 2
 * limitAddCount() // => 2
 * // => `limitAddCount` is invoked twice and the result is cached.
 * ```
 *
 * @param n The number of calls before the cached result is returned
 * @param func The function to restrict
 * @template T The type of the function
 * @returns Returns the new restricted function
 *
 * @category Function
 */
export function maxCalls<T extends GenericFunction<T>>(func: T, n: number): T {
	if (typeof func !== "function") throw new TypeError("Expected a function");

	let count = 0;
	let result: ReturnType<T>;

	return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
		if (count < n) {
			count += 1;
			result = func.apply(this, args);
		}
		return result;
	} as T;
}
