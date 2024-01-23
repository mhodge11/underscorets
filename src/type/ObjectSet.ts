import type { PlainObject } from "./PlainObject.js";
import type { Update } from "./helpers/objects.js";
import type { $ } from "./helpers/utils.js";

/**
 * This type is used to set the type of a property of an object.
 * The property is specified by a path string which can be
 * returned by the keys of the `{@link ObjectFlatKeys}` type.
 *
 * *Based on [hotscript](https://github.com/gvergnaud/HOTScript).*
 *
 * @example
 * ```ts
 * type NestedObject = {
 *   a: string;
 *   b: {
 *     c: number;
 *     d: {
 *       e: [boolean];
 *     };
 *   };
 * };
 *
 * type Foo = ObjectSet<NestedObject, "a", number>;
 * // => { a: number; b: { c: number; d: { e: [boolean]; }; }; }
 *
 * type Bar = ObjectSet<NestedObject, "b.c", string>;
 * // => { a: string; b: { c: string; d: { e: [boolean]; }; }; }
 *
 * type Baz = ObjectSet<NestedObject, "b.d.e[0]", string>;
 * // => { a: string; b: { c: number; d: { e: [string]; }; }; }
 * ```
 *
 * @template T The object type
 * @template P The path string
 * @template V The value type
 *
 * @category Type
 */
export type ObjectSet<T extends PlainObject, P extends string, V> = $<
	Update<P, V>,
	T
>;
