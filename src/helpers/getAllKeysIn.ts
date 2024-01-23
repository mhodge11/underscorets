import { getSymbolsIn } from "./getSymbolsIn.ts";

export function getAllKeysIn<T extends object>(object: T): (keyof T)[] {
	const allKeysIn: (keyof T)[] = [];

	for (const key in object) allKeysIn.push(key);

	if (!Array.isArray(object))
		allKeysIn.push(...(getSymbolsIn(object) as (keyof T)[]));

	return allKeysIn;
}
