import { copyObject } from "./copyObject.ts";
import { getSymbols } from "./getSymbols.ts";

export const copySymbols = <T extends object>(
	source: T,
	object?: Partial<T>,
): T | Partial<T> =>
	copyObject(source, getSymbols(source) as (keyof T)[], object) as
		| T
		| Partial<T>;
