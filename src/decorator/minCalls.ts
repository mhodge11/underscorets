import { minCalls } from "../function/minCalls.ts";
import { toDecorator } from "./toDecorator.ts";

/**
 * Only invokes the decorated function after it's called more than `n` times.
 *
 * Look at {@link minCalls} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
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
