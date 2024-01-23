import { copyObject } from "./copyObject.ts";
import { getSymbolsIn } from "./getSymbolsIn.ts";

export function copySymbolsIn<T extends object>(
	source: T,
	object?: Partial<T>,
): T | Partial<T> {
	return copyObject(source, getSymbolsIn(source) as (keyof T)[], object) as
		| T
		| Partial<T>;
}
