export function isEqualDataViews(a: DataView, b: DataView): boolean {
	if (!(a instanceof DataView) || !(b instanceof DataView)) return false;

	if (Object.is(a, b)) return true;

	if (a.byteLength !== b.byteLength) return false;

	for (let i = 0; i < a.byteLength; i++)
		if (a.getUint8(i) !== b.getUint8(i)) return false;

	return true;
}
