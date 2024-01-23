import { arrayLikeValues } from "./arrayLikeValues.ts";

export function strictLastIndexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex: number,
): number {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return -1;

	let i: number = fromIndex + 1;
	while (i--) if (array[i] === value) return i;

	return i;
}
