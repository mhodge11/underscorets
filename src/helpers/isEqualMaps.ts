import { PlainObject } from "../types/PlainObject.ts";

import { isEqualObjects } from "./isEqualObjects.ts";

export const isEqualMaps = (
	a: Map<unknown, unknown>,
	b: Map<unknown, unknown>,
): boolean => {
	if (!(a instanceof Map) || !(b instanceof Map)) return false;

	if (Object.is(a, b)) return true;

	if (a.size !== b.size) return false;

	const aObj: PlainObject = Object.fromEntries(a);
	const bObj: PlainObject = Object.fromEntries(b);

	return isEqualObjects(aObj, bObj);
};
