import type { PlainObject } from "../type/PlainObject.ts";

import { isArrayLike } from "../validate/isArrayLike.ts";
import { arrayLikeKeys } from "./arrayLikeKeys.ts";
import { getSymbols } from "./getSymbols.ts";

export function getAllKeys<T extends object>(object: T): (keyof T)[] {
	let allKeys: (keyof T)[] = [];

	if (isArrayLike(object)) allKeys = arrayLikeKeys(object) as (keyof T)[];
	else allKeys = Object.keys(object as PlainObject) as (keyof T)[];

	if (!Array.isArray(object))
		allKeys.push(...(getSymbols(object) as (keyof T)[]));

	return allKeys;
}
