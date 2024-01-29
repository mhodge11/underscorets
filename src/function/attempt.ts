import type { GenericFunction } from "../type/GenericFunction";

/**
 * Attempts to invoke `func`, returning a tuple of [result, error].
 * If an error is thrown, the error is returned as the second element of the tuple.
 * Any additional arguments are provided to `func` when it's invoked.
 *
 * @example
 * ```ts
 * // Avoid throwing errors for invalid selectors.
 * const [elements, error] = attempt(selector =>
 *   document.querySelectorAll(selector), '>_>')
 *
 * if (error) {
 *  // Handle the error.
 * }
 * ```
 *
 * @param func The function to attempt
 * @param args The arguments to invoke `func` with
 * @returns The `func` result or error as a tuple
 *
 * @category Function
 */
export function attempt<T extends GenericFunction<T>>(
	func: T,
	...args: Parameters<T>
): [ReturnType<T>, undefined] | [undefined, Error] {
	try {
		return [func(...args), undefined];
	} catch (error) {
		if (error instanceof Error) return [undefined, error];
		return [undefined, new Error(String(error))];
	}
}
