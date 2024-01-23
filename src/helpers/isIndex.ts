import { MAX_SAFE_INTEGER } from "../config/constants.ts";
import { reIsUint } from "../config/regex.ts";

export function isIndex(value: unknown, length?: number) {
	const type = typeof value;

	length ??= MAX_SAFE_INTEGER;

	return (
		!!length &&
		(type === "number" || (type !== "symbol" && reIsUint.test(value as any))) &&
		(value as any) > -1 &&
		(value as any) % 1 === 0 &&
		(value as any) < length
	);
}
