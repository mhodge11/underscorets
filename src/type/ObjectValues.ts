import type { PlainObject } from "./PlainObject.ts";
import type { Values } from "./helpers/objects.ts";
import type { $ } from "./helpers/utils.ts";

/**
 * This type is used to get the values of an object.
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
 * type MyValues = ObjectValues<MyObject>;
 * // => (string | number | boolean)[]
 * ```
 *
 * @template T The object type
 *
 * @category Type
 */
export type ObjectValues<T extends PlainObject> = $<Values, T>[];
