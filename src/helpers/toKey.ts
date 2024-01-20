import type { Jsonifiable } from "../types/Jsonifiable.ts";
import type { Primitive } from "../types/Primitive.ts";

export const toKey = (value: Jsonifiable | Primitive): string => {
	if (typeof value === "string") return value;
	if (typeof value === "number") return value.toString();
	if (typeof value === "boolean") return value.toString();
	if (value === null) return "null";
	if (value === undefined) return "undefined";
	return JSON.stringify(value);
};
