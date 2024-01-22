import { once } from "../function/once.ts";
import { toDecorator } from "./toDecorator.ts";

/**
 * Only invokes the decorated function once.
 * Subsequent calls to the decorated function return the result of the last invocation.
 *
 * Look at {@link once} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 *
 * @example
 * ```ts
 * class TestClass {
 *  private count = 0;
 *
 *  @decOnce()
 *  testMethod() {
 *    return ++this.count;
 *  }
 * }
 *
 * const instance = new TestClass();
 * instance.testMethod(); // => 1
 * instance.testMethod(); // => 1
 * instance.testMethod(); // => 1
 * ```
 *
 * @category Decorator
 */
export function decOnce() {
	return toDecorator(once)();
}
