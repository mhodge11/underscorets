import { throttle } from "../function/throttle.ts";
import { toDecorator } from "./toDecorator.ts";

/**
 * The decorated function is invoked at most once per every `wait` milliseconds.
 *
 * Look at {@link throttle} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 *
 * @example
 * ```ts
 * class TestClass {
 *   @decThrottle(1000)
 *   testMethod() {
 *     console.log("Throttled!");
 *   }
 * }
 *
 * const instance = new TestClass();
 * instance.testMethod(); // => "Throttled!" is logged once per second.
 * instance.testMethod(); // nothing happens
 * ```
 *
 * @param wait The number of milliseconds to wait between invocations
 *
 * @category Decorator
 */
export function decThrottle(wait: number) {
	return toDecorator(throttle)(wait);
}
