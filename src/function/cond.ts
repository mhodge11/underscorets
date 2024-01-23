import { map } from "../array/map.js";

/**
 * Creates a function that iterates over `pairs` and invokes the corresponding
 * function of the first predicate to return truthy. The predicate-function
 * pairs are invoked with the `this` binding and arguments of the created
 * function.
 *
 * *Based on [lodash.cond](https://lodash.com/docs/4.17.15#cond).*
 *
 * @example
 * ```ts
 * const func = cond([
 *   [matches({ 'a': 1 }),         () => 'matches A'],
 *   [conforms({ 'b': isNumber }), () => 'matches B'],
 *   [() => true,                  () => 'no match']
 * ])
 *
 * func({ 'a': 1, 'b': 2 })
 * // => 'matches A'
 *
 * func({ 'a': 0, 'b': 1 })
 * // => 'matches B'
 *
 * func({ 'a': '1', 'b': '2' })
 * // => 'no match'
 * ```
 *
 * @param pairs The predicate-function pairs
 * @template T The type of the conditional function
 * @template U The type of the function to invoke
 * @returns The new composite function
 *
 * @category Function
 */
export function cond<
	T extends (...args: any) => boolean,
	U extends (...args: Parameters<T>) => ReturnType<U>,
>(
	pairs: [T, U][],
): (this: unknown, ...args: Parameters<T>) => ReturnType<U> | void {
	if (!pairs?.length) return () => undefined;

	pairs = map(pairs, (pair) => {
		if (typeof pair[1] !== "function")
			throw new TypeError("Expected a function");
		return [pair[0], pair[1]];
	});

	return function (
		this: unknown,
		...args: Parameters<T>
	): ReturnType<U> | void {
		for (const pair of pairs)
			if (pair[0].apply(this, args)) return pair[1].apply(this, args);
	};
}
