import type { GenericFunction } from "../type/GenericFunction";

/**
 * Composes a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * *Based on [lodash.flow](https://lodash.com/docs/4.17.15#flow).*
 *
 * @example
 * ```ts
 * function add(a, b) {
 *  return a + b
 * }
 *
 * function square(n) {
 *   return n * n
 * }
 *
 * const addSquare = flow(add, square)
 * addSquare(1, 2)
 * // => 9
 * ```
 *
 * @param funcs The functions to invoke
 * @template T The type of the `funcs` functions
 * @returns The new composite function
 *
 * @category Function
 */
export function flow<T extends GenericFunction<T>>(
	...funcs: T[]
): (this: unknown, ...args: Parameters<T>) => ReturnType<T> {
	const length = funcs.length;
	let i = length;

	while (i--)
		if (typeof funcs[i] !== "function")
			throw new TypeError("Expected a function");

	return function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
		let j = 0;
		let result = length
			? ((funcs[j] as T).apply(this, args) as Parameters<T>)
			: ((args as [...Parameters<T>])[0] as Parameters<T>);

		while (++j < length) {
			// @ts-expect-error - Figure out how to fix this
			result = (funcs[j] as T).call(this, result) as Parameters<T>;
		}

		return result as ReturnType<T>;
	};
}
