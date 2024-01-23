import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Generates a function that invokes the given function `func` at most once per every `wait` milliseconds.
 * The throttled function always returns the result of the last `func` invocation.
 *
 * This function can be used as a decorator with {@link decThrottle}.
 *
 * *Based on [moderndash.throttle](https://moderndash.io/docs/throttle).*
 *
 * @example
 * ```ts
 * const throttled = throttle(() => console.log("Throttled!"), 1000);
 *
 * throttled();
 * throttled();
 * // => "Throttled!" is logged once per second.
 * ```
 *
 * @param func The function to throttle
 * @param wait The number of milliseconds to throttle invocations to
 * @template T The type of the function
 * @returns Returns the new throttled function
 *
 * @category Function
 */
export function throttle<T extends GenericFunction<T>>(
	func: T,
	wait: number,
): T {
	let isThrottled = false;
	let lastResult: ReturnType<T>;

	return function (this: unknown, ...args: Parameters<T>) {
		if (!isThrottled) {
			lastResult = func.apply(this, args);
			isThrottled = true;
			setTimeout(() => (isThrottled = false), wait);
		}
		return lastResult;
	} as T;
}
