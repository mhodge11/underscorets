import type { $, O } from "hotscript";
import type { ObjectPaths } from "../types/ObjectPaths.ts";
import type { PlainObject } from "../types/PlainObject.ts";

import { validPathRegex } from "../config/regex.ts";
import { get } from "./get.ts";

type BuildAtObj<
	T extends PlainObject,
	P extends string[],
	Acc extends unknown[] = [],
> = P["length"] extends 0
	? Acc
	: P extends [infer Path, ...infer Rest]
	  ? BuildAtObj<
				T,
				Rest extends string[] ? Rest : [],
				Path extends string ? [...Acc, $<O.Get<Path>, T>] : Acc
		  >
	  : never;

type AtObj<T extends PlainObject, P extends string[]> = BuildAtObj<T, P>;

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
): AtObj<T, P[]> {
	const values: any[] = [];

	for (const path of paths) {
		if (!validPathRegex.test(path))
			throw new Error(
				`Invalid path: ${path}. Look at the examples for the correct format.`,
			);

		values.push(get(object, path));
	}

	return values as AtObj<T, P[]>;
}
