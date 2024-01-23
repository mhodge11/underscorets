export function isEqualRegExps(a: RegExp, b: RegExp): boolean {
	if (!(a instanceof RegExp) || !(b instanceof RegExp)) return false;

	if (Object.is(a, b)) return true;

	return a.toString() === b.toString();
}
