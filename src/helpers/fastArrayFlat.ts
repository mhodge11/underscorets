export const fastArrayFlat = <T>(arrays: (readonly T[])[]): readonly T[] => {
	let result = arrays.shift() ?? [];
	for (const array of arrays) result = [...result, ...array];
	return result;
};
