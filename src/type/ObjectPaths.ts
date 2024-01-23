import type { PlainObject } from "./PlainObject.ts";
import type { AllPaths } from "./helpers/objects.ts";
import type { $ } from "./helpers/utils.ts";

/**
 * This type defines all the paths of an object, including nested objects.
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
 *       e: boolean;
 *     };
 *   };
 * };
 *
 * type Paths = ObjectPaths<NestedObject>;
 * // => ("a" | "b" | "b.c" | "b.d" | "b.d.e")[]
 * ```
 *
 * @template T The object type
 *
 * @category Type
 */
export type ObjectPaths<T extends PlainObject> = $<AllPaths, T> | (string & {});
