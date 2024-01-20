import type { $, O } from "hotscript";
import type { ObjectPaths } from "../types/ObjectPaths.ts";
import type { PlainObject } from "../types/PlainObject.ts";

import {
	matchBracketsRegex,
	pathSplitRegex,
	validPathRegex,
} from "../config/regex.ts";

type GetObj<T extends PlainObject, P extends string> = $<O.Get<P>, T>;

/**
 * Gets the value at path of object. If the value doesn't exist, it returns `undefined`.
 *
 * @example
 * ```ts
 * const obj = { a: { b: 2 } };
 * get(obj, 'a.b');
 * // => 2
 *
 * // `[number]` can be used to access array elements
 * const obj = { a: { b: 2, c: ['hello'] } };
 * get(obj, 'a.c[0]');
 * // => 'hello'
 * ```
 *
 * @param obj The object to query
 * @param path The path of the property to get
 * @template T The type of the object
 * @template P The type of the object path
 * @throws {Error} If the path is invalid
 * @returns The value at the path
 *
 * @category Object
 */
export function get<T extends PlainObject, P extends ObjectPaths<T>>(
	object: T,
	path: P,
): GetObj<T, P> {
	if (!validPathRegex.test(path))
		throw new Error(
			`Invalid path: ${path}. Look at the examples for the correct format.`,
		);

	const pathParts = (path as string).split(pathSplitRegex);
	let currentObj: PlainObject = object;
	let value: unknown;

	for (let i = 0; i < pathParts.length; i++) {
		const key = (pathParts[i] as string).replace(matchBracketsRegex, "");

		if (i === pathParts.length - 1) {
			value = currentObj[key];
			break;
		}

		currentObj = currentObj[key] as PlainObject;
	}

	return value as GetObj<T, P>;
}
