import type { PlainObject } from "./PlainObject";
import type { AllPaths } from "./helpers/objects";
import type { $ } from "./helpers/utils";

type StringIfNever<T> = [T] extends [never] ? string : T;

type Paths<T> = StringIfNever<$<AllPaths, T>>;

/**
 * This type is used to get all the keys of an object, including nested objects.
 * It flattens the object into a single level.
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
 * type FlatKeys = ObjectFlatten<NestedObject>;
 * // => {
 * //   "a": string;
 * //   "a.b": { c: number; d: { e: boolean; }; };
 * //   "a.b.c": number;
 * //   "a.b.d": { e: boolean; };
 * //   "a.b.d.e": boolean;
 * // }
 * ```
 *
 * @template T The object type
 *
 * @category Type
 */
export type ObjectFlatten<T extends PlainObject> = Record<Paths<T>, unknown>;
