import { throttle } from "../function/throttle.js";
import { toDecorator } from "./toDecorator.js";

/**
 * The decorated function is invoked at most once per every `wait` milliseconds.
 *
 * Look at {@link throttle} for the non-decorator version.
 *
 * *Requires the [experimentalDecorators](https://www.typescriptlang.org/tsconfig#experimentalDecorators) flag to be set.*
 *
 * *Based on [moderndash.decThrottle](https://moderndash.io/docs/decThrottle).*
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
