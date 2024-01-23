import type { PlainObject } from "../type/PlainObject";

import { isEqual } from "../validate/isEqual";
import { isPlainObject } from "../validate/isPlainObject";

export function isEqualObjects(a: PlainObject, b: PlainObject): boolean {
	if (!isPlainObject(a) || !isPlainObject(b)) return false;

	if (Object.is(a, b)) return true;

	// check if the objects have the same keys
	const keys1 = Object.keys(a);
	const keys2 = Object.keys(b);
	if (!isEqual(keys1, keys2)) return false;

	// check if the values of each key in the objects are equal
	for (const key of keys1) if (!isEqual(a[key], b[key])) return false;

	// the objects are deeply equal
	return true;
}
