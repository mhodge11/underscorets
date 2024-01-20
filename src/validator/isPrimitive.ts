import type { Primitive } from "../types/Primitive.ts";

/**
 * Checks if `value` is primitive.
 *
 * @example
 * ```ts
 * isPrimitive(null);
 * // => true
 *
 * isPrimitive(undefined);
 * // => true
 *
 * isPrimitive(0);
 * // => true
 *
 * isPrimitive("");
 * // => true
 *
 * isPrimitive(true);
 * // => true
 *
 * isPrimitive(Symbol());
 * // => true
 *
 * isPrimitive({});
 * // => false
 *
 * isPrimitive([]);
 * // => false
 *
 * isPrimitive(() => {});
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is primitive, else `false`
 *
 * @category Validator
 */
export function isPrimitive(value: unknown): value is Primitive {
	const type = typeof value;
	return (
		type === "string" ||
		type === "number" ||
		type === "bigint" ||
		type === "boolean" ||
		type === "symbol" ||
		value == null
	);
}
