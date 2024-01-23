import { maxCalls } from "../function/maxCalls";
import { toDecorator } from "./toDecorator";

/**
 * Only invokes the decorated function as long as it's called `<= n` times.
 * Subsequent calls to the decorated function return the result of the last invocation.
 *
 * Look at {@link maxCalls} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 *
 * *Based on [moderndash.decMaxCalls](https://moderndash.io/docs/decMaxCalls).*
 *
 * @example
 * ```ts
 * class TestClass {
 *  private count = 0;
 *
 *  @decMaxCalls(2)
 *  testMethod() {
 *    return ++this.count;
 *  }
 * }
 *
 * const instance = new TestClass();
 * instance.testMethod(); // => 1
 * instance.testMethod(); // => 2
 * instance.testMethod(); // => 2
 * ```
 *
 * @param n The number of calls before the cached result is returned
 *
 * @category Decorator
 */
export function decMaxCalls(n: number) {
	return toDecorator(maxCalls)(n);
}
