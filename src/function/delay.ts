import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * *Based on [lodash.delay](https://lodash.com/docs/4.17.15#delay).
 *
 * @example
 * ```ts
 * delay(text => console.log(text), 1000, 'later')
 * // => Logs 'later' after one second.
 * ```
 *
 * @param func The function to delay
 * @param wait The number of milliseconds to delay invocation
 * @param args The arguments to invoke `func` with
 * @template T The type of the function
 * @returns The timer ID
 *
 * @category Function
 */
export function delay<T extends GenericFunction<T>>(
	func: T,
	wait: number | `${number}`,
	...args: Parameters<T>
): ReturnType<typeof setTimeout> {
	if (typeof func !== "function") throw new TypeError("Expected a function");
	return setTimeout(func, wait ? +wait : 1, ...args);
}
