import { isEqualArrays } from "./isEqualArrays";

export function isEqualSets(a: Set<unknown>, b: Set<unknown>): boolean {
	if (Object.is(a, b)) return true;

	if (a.size !== b.size) return false;

	return isEqualArrays([...a], [...b]);
}
