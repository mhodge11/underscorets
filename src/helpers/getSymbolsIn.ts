import { getSymbols } from "./getSymbols.ts";

export function getSymbolsIn<T extends object>(
	object: T,
): Extract<keyof T, symbol>[] {
	if (object == null) return [];

	const result: Extract<keyof T, symbol>[] = [];

	while (object != null) {
		result.push(...getSymbols(object));
		object = Object.getPrototypeOf(Object(object));
	}

	return result;
}
