import type { ObjectPaths } from "../types/ObjectPaths.ts";
import type { ObjectSet } from "../types/ObjectSet.ts";
import type { PlainObject } from "../types/PlainObject.ts";

import {
	matchBracketsRegex,
	pathSplitRegex,
	validPathRegex,
} from "../config/regex.ts";
import { isPlainObject } from "../validator/isPlainObject.ts";

/**
 * Sets the value at path of object. If a portion of path doesn’t exist, it’s created.
 *
 * *Based on [moderndash.set](https://moderndash.io/docs/set).*
 *
 * @example
 * ```ts
 * const obj = { a: { b: 2 } };
 * set(obj, 'a.c', 1);
 * // => { a: { b: 2, c: 1 } }
 *
 * // `[number]` can be used to access array elements
 * set(obj, 'a.c[0]', 'hello');
 * // => { a: { b: 2, c: ['hello'] } }
 *
 * // numbers with dots are treated as keys
 * set(obj, 'a.c.0.d', 'world');
 * // => { a: { b: 2, c: { 0: { d: 'world' } } }
 *
 * // supports numbers in keys
 * set(obj, 'a.e0.a', 1);
 * // => { a: { e0: { a: 1 } } }
 * ```
 *
 * @param obj The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 * @template T The type of the object
 * @template P The type of the object path
 * @template V The type of the value to set
 * @throws {Error} If the path is invalid
 * @returns A modified object
 *
 * @category Object
 */
export function set<T extends PlainObject, P extends ObjectPaths<T>, V>(
	object: T,
	path: P,
	value: V,
): ObjectSet<T, P, V> {
	if (!validPathRegex.test(path))
		throw new Error(
			`Invalid path: ${path}. Look at the examples for the correct format.`,
		);

	const pathParts = (path as string).split(pathSplitRegex);
	let currentObj: PlainObject = object;

	for (let i = 0; i < pathParts.length; i++) {
		const key = (pathParts[i] as string).replace(matchBracketsRegex, "");

		if (i === pathParts.length - 1) {
			currentObj[key] = value;
			break;
		}

		const nextElementInArray = (pathParts[i + 1] as string).startsWith("[");
		const nextElementInObject = !nextElementInArray;

		if (nextElementInArray && !Array.isArray(currentObj[key]))
			currentObj[key] = [];

		if (nextElementInObject && !isPlainObject(currentObj[key]))
			currentObj[key] = {};

		currentObj = currentObj[key] as PlainObject;
	}

	return object as ObjectSet<T, P, V>;
}
