import type { GenericFunction } from "../types/GenericFunction.ts";

import { maxCalls } from "./maxCalls.ts";

/**
 * Creates a function that invokes the given function as long as it's called once.
 *
 * Subsequent calls to the created function return the result of the last `func` invocation.
 *
 * This function can be used as a decorator with {@link decOnce}.
 *
 * @example
 * ```ts
 * let count = 0;
 * const addCount = () => ++count;
 *
 * // Allow addCount to be invoked twice.
 * const limitAddCount = once(addCount)
 *
 * limitAddCount() // => 1
 * limitAddCount() // => 1
 * limitAddCount() // => 1
 * // => `limitAddCount` is invoked twice and the result is cached.
 * ```
 *
 * @param func The function to restrict
 * @template T The type of the function
 * @returns Returns the new restricted function
 *
 * @category Function
 */
export function once<T extends GenericFunction<T>>(
	func: T,
): (this: unknown, ...args: Parameters<T>) => ReturnType<T> | void {
	if (typeof func !== "function") throw new TypeError("Expected a function");
	return maxCalls(func, 1);
}
