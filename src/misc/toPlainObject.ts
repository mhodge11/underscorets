import type { PlainObject } from "../type/PlainObject";

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
 * @category Misc
 */
export function toPlainObject(value: unknown): PlainObject {
	const object = Object(value);
	const plainObject: PlainObject = {};

	for (const key in object) plainObject[key] = object[key];

	return plainObject;
}
