import type { GenericFunction } from "../type/GenericFunction.ts";

import { flow } from "./flow.ts";

/**
 * This method is like `{@link flow}` except that it composes a function that
 * invokes the given functions from right to left.
 *
 * *Based on [lodash.flowRight](https://lodash.com/docs/4.17.15#flowRight).*
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
 * const addSquare = flowRight(square, add)
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
export function flowRight<T extends GenericFunction<T>>(
	...funcs: T[]
): (this: unknown, ...args: [...Parameters<T>]) => ReturnType<T> {
	return flow(...funcs.reverse());
}
