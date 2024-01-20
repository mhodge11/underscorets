import type { PlainObject } from "../types/PlainObject.ts";

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @example
 * ```ts
 * function Foo() {
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * assign({ 'a': 1 }, new Foo)
 * // => { 'a': 1, 'b': 2 }
 *
 * assign({ 'a': 1 }, toPlainObject(new Foo))
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 * ```
 *
 * @param value The value to convert
 * @returns The converted plain object
 *
 * @category Util
 */
export function toPlainObject<T>(value: unknown): PlainObject<T> {
	const object = Object(value);
	const plainObject: PlainObject<T> = {};

	for (const key in object) plainObject[key] = object[key];

	return plainObject;
}
