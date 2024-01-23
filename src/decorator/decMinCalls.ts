import { minCalls } from "../function/minCalls.js";
import { toDecorator } from "./toDecorator.js";

/**
 * Only invokes the decorated function after it's called more than `n` times.
 *
 * Look at {@link minCalls} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 *
 * *Based on [moderndash.decMinCalls](https://moderndash.io/docs/decMinCalls).*
 *
 * @example
 * ```ts
 * class TestClass {
 *   @decMinCalls(2)
 *   testMethod() {
 *     return 1;
 *   }
 * }
 *
 * const instance = new TestClass();
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => undefined
 * instance.testMethod(); // => 1
 * ```
 *
 * @param n The number of calls before the decorated function is invoked
 *
 * @category Decorator
 */
export function decMinCalls(n: number) {
	return toDecorator(minCalls)(n);
}
