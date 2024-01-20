import { isEqualDataViews } from "./isEqualDataViews.js";

export const isEqualArrayBuffers = (
	a: ArrayBuffer,
	b: ArrayBuffer,
): boolean => {
	if (!(a instanceof ArrayBuffer) || !(b instanceof ArrayBuffer)) return false;

	if (Object.is(a, b)) return true;

	return isEqualDataViews(new DataView(a), new DataView(b));
};
