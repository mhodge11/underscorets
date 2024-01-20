import { copyObject } from "./copyObject.ts";
import { getSymbolsIn } from "./getSymbolsIn.ts";

export const copySymbolsIn = <T extends object>(
	source: T,
	object?: Partial<T>,
): T | Partial<T> =>
	copyObject(source, getSymbolsIn(source) as (keyof T)[], object) as
		| T
		| Partial<T>;
