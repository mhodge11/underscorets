import { slice } from "../array/slice.js";

export function castSlice<T>(array: T[], start: number, end?: number): T[] {
	if (!array?.length) return [];

	const { length } = array;
	end = end === undefined ? length : end;

	return !start && end >= length ? array : slice(array, start, end);
}
