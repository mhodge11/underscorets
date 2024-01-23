/**
 * This type builds a generic function.
 *
 * @example
 * ```ts
 * function foo<
 *   F extends GenericFunction<F>
 * >(fn: F): F & { bar: () => void; } {
 *   const foo = function (
 *     this: unknown,
 *     ...args: Parameters<TFunc>
 *   ) {
 *     return fn.apply(this, args);
 *   }
 *
 *   foo.bar = function () {
 *     console.log("bar");
 *   }
 *
 *   return foo as F & { bar: () => void; };
 * }
 * ```
 *
 * @template F The type of the function
 *
 * @category Type
 */
export type GenericFunction<F extends (...args: any) => any> = (
	...args: Parameters<F>
) => ReturnType<F>;
