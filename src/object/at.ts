import type { ObjectAt } from "../type/ObjectAt.ts";
import type { ObjectPaths } from "../type/ObjectPaths.ts";
import type { PlainObject } from "../type/PlainObject.ts";

import { validPathRegex } from "../config/regex.ts";
import { get } from "./get.ts";

/**
 * Gets the values at each of the `paths`. If a value at a path doesn't exist, it returns `undefined` for that path.
 *
 * @example
 * ```ts
 * const obj = { a: { b: 2 } };
 * at(obj, ['a', 'a.b']);
 * // => [{ b: 2 }, 2]
 *
 * // `[number]` can be used to access array elements
 * const obj = { a: { b: 2, c: ['hello'] } };
 * at(obj, ['a.b', 'a.c[0]']);
 * // => [2, 'hello']
 * ```
 *
 * @param obj The object to query
 * @param paths The paths of the properties to get
 * @template T The type of the object
 * @template P The type of the object path
 * @throws {Error} If the path is invalid
 * @returns The values at the paths
 *
 * @category Object
 */
export function at<T extends PlainObject, P extends ObjectPaths<T>>(
	object: T,
	paths: P[],
): ObjectAt<T, P[]> {
	const values: any[] = [];

	for (const path of paths) {
		if (!validPathRegex.test(path))
			throw new Error(
				`Invalid path: ${path}. Look at the examples for the correct format.`,
			);

		values.push(get(object, path));
	}

	return values as ObjectAt<T, P[]>;
}
