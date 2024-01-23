import type { ObjectGet } from "./ObjectGet.ts";
import type { PlainObject } from "./PlainObject.ts";

type BuildObjectAt<
	T extends PlainObject,
	P extends string[],
	Acc extends unknown[] = [],
> = P["length"] extends 0
	? Acc
	: P extends [infer Path, ...infer Rest]
	  ? BuildObjectAt<
				T,
				Rest extends string[] ? Rest : [],
				Path extends string ? [...Acc, ObjectGet<T, Path>] : Acc
		  >
	  : never;

/**
 * This type is used to get the types of the values at given paths in an object.
 *
 * *Based on [hotscript](https://github.com/gvergnaud/HOTScript).*
 *
 * @example
 * ```ts
 * type Foo = {
 *   a: {
 *    b: {
 *     c: string;
 *   };
 * };
 *
 * type Bar = ObjectAt<Foo, ["a", "b", "c"]>;
 * //=> [{ b: { c: string; } }, { c: string; }, string]
 * ```
 *
 * @template T The object type
 * @template P The path array type
 *
 * @category Type
 */
export type ObjectAt<T extends PlainObject, P extends string[]> = BuildObjectAt<
	T,
	P
>;
