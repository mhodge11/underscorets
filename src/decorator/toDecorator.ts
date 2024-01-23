import type { ArrayTail } from "../type/ArrayTail.js";
import type { GenericFunction } from "../type/GenericFunction.js";

/**
 * Transforms a function into a decorator function.
 *
 * *Based on [moderndash.toDecorator](https://moderndash.io/docs/todecorator).*
 *
 * @example
 * ```ts
 * function log(func: Function, message: string) {
 *   return function (...args: unknown[]) {
 *     console.log(message);
 *     return func(...args);
 *   };
 * }
 *
 * const logger = toDecorator(log);
 *
 * class TestClass {
 *   @logger("Hello world!")
 *   testMethod() {
 *     return 1;
 *   }
 * }
 *
 * const instance = new TestClass();
 * instance.testMethod();
 * // => Log "Hello World" and return 1
 * ```
 *
 * @param func The function to transform
 * @template T The type of the function
 * @returns A decorator function that can be used to decorate a method
 *
 * @category Decorator
 */
export function toDecorator<T extends GenericFunction<T>>(func: T) {
	return (...args: ArrayTail<Parameters<T>>) =>
		(_target: unknown, _key: string, descriptor: PropertyDescriptor) => {
			const creatorArgs = [descriptor.value, ...args] as Parameters<T>;
			descriptor.value = func(...creatorArgs);
		};
}
