import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * *Based on [lodash.defer](https://lodash.com/docs/4.17.15#defer).*
 *
 * @example
 * ```ts
 * defer(text => console.log(text), 'deferred')
 * // => Logs 'deferred' after one millisecond.
 * ```
 *
 * @param func The function to defer
 * @param args The arguments to invoke `func` with
 * @template T The type of the function
 * @returns The timer ID
 *
 * @category Function
 */
export function defer<T extends GenericFunction<T>>(
	func: T,
	...args: Parameters<T>
): ReturnType<typeof setTimeout> {
	if (typeof func !== "function") throw new TypeError("Expected a function");
	return setTimeout(func, 1, ...args);
}
