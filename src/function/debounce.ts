import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Creates a debounced version of a function. Only calling it after a specified amount of time has passed without any new calls.
 *
 * **Methods:**
 * - `cancel()` will cancel the next invocation of the debounced function.
 * - `flush()` will immediately invoke the debounced function and cancel any pending invocations.
 * - `pending()` returns true if the debounced function is set to invoke.
 *
 * This function can be used as a decorator with {@link decDebounce}.
 *
 * *Based on [moderndash.debounce](https://moderndash.io/docs/debounce).*
 *
 * @example
 * ```ts
 * const sayHello = (name: string) => console.log(`Hello, ${name}!`);
 * const debouncedSayHello = debounce(sayHello, 200);
 *
 * debouncedSayHello("John");
 * debouncedSayHello("Jane");
 * // => Only the second invocation of `debouncedSayHello` is executed, after a delay of 200ms.
 * ```
 *
 * @param func The function to debounce
 * @param wait The number of milliseconds to wait before invoking `func`
 * @template T The type of the function
 * @returns A debounced version of `func` with `cancel` and `flush` methods
 *
 * @category Function
 */
export function debounce<T extends GenericFunction<T>>(
	func: T,
	wait: number,
): T & {
	cancel: () => void;
	flush: () => void;
	pending: () => boolean;
} {
	let timeoutId: ReturnType<typeof setTimeout> | undefined;

	const debounced = function (this: unknown, ...args: Parameters<T>) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func.apply(this, args);
			timeoutId = undefined;
		}, wait);
	};

	debounced.cancel = () => {
		clearTimeout(timeoutId);
		timeoutId = undefined;
	};

	debounced.flush = function (this: unknown, ...args: Parameters<T>) {
		debounced.cancel();
		func.apply(this, args);
	};

	debounced.pending = () => timeoutId !== undefined;

	return debounced as T & {
		cancel: () => void;
		flush: () => void;
		pending: () => boolean;
	};
}
