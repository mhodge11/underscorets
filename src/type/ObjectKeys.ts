import type { PlainObject } from "./PlainObject";
import type { Keys } from "./helpers/objects";
import type { $ } from "./helpers/utils";

/**
 * This type is used to get the keys of an object.
 *
 * *Based on [hotscript](https://github.com/gvergnaud/HOTScript).*
 *
 * @example
 * ```ts
 * type MyObject = {
 *   a: string;
 *   b: number;
 *   c: boolean;
 * };
 *
 * type MyKeys = ObjectKeys<MyObject>;
 * // => ("a" | "b" | "c")[]
 * ```
 *
 * @template T The object type
 *
 * @category Type
 */
export type ObjectKeys<T extends PlainObject> = $<Keys, T>[];
