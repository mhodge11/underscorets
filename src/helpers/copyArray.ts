export function copyArray<T>(source: readonly T[], array?: T[]): T[] {
	if (source == null) return [];

	let index: number = -1;
	const { length } = source;

	array ??= new Array(length);

	for (const value of source) array[++index] = value;

	return array;
}
