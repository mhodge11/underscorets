import type { PlainObject } from "./PlainObject.js";
import type { Get } from "./helpers/objects.js";
import type { $ } from "./helpers/utils.js";

/**
 * This type is used to get the type of a property of an object.
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
 * type Foo = ObjectGet<NestedObject, "a">;
 * // => string
 *
 * type Bar = ObjectGet<NestedObject, "b.c">;
 * // => number
 *
 * type Baz = ObjectGet<NestedObject, "b.d.e[0]">;
 * // => boolean
 * ```
 *
 * @template T The object type
 * @template P The path string
 *
 * @category Type
 */
export type ObjectGet<T extends PlainObject, P extends string> = $<Get<P>, T>;
