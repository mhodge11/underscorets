import { arrayLikeValues } from "./arrayLikeValues.ts";

export function strictIndexOf<T>(
	array: readonly T[] | ArrayLike<T>,
	value: T,
	fromIndex: number,
): number {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return -1;

	let i = fromIndex - 1;
	const { length } = arr;

	while (++i < length) if (arr[i] === value) return i;

	return -1;
}
