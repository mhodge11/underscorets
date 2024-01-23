import type { TypedArray } from "../type/TypedArray";

import { isEqual } from "../validate/isEqual";

export function isEqualArrays<A extends unknown[] | TypedArray>(
	a: A,
	b: A,
): boolean {
	if (Object.is(a, b)) return true;

	if ("byteLength" in a && "byteLength" in b && a.byteLength !== b.byteLength)
		return false;

	if (a.length !== b.length) return false;

	return a.every((element, index) => isEqual(element, b[index]));
}
