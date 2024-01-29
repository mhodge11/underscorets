/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * *Based on [lodash.negate](https://lodash.com/docs/4.17.15#negate).*
 *
 * @example
 * ```ts
 * function isEven(n) {
 *   return n % 2 === 0
 * }
 *
 * filter([1, 2, 3, 4, 5, 6], negate(isEven))
 * // => [1, 3, 5]
 * ```
 *
 * @param predicate The predicate to negate
 * @template T The type of the function
 * @returns The new negated function
 *
 * @category Function
 */
export function negate<T extends (...args: any) => boolean>(
	predicate: T,
): (this: unknown, ...args: Parameters<T>) => boolean {
	if (typeof predicate !== "function")
		throw new TypeError("Expected a function");

	return function (this: unknown, ...args: Parameters<T>): boolean {
		return !predicate.apply(this, args);
	};
}
