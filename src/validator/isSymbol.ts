import { hasSymbolTag } from "../helpers/getTag.ts";
import { isObjectLike } from "./isObjectLike.ts";

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @example
 * ```ts
 * isSymbol(Symbol.iterator)
 * // => true
 *
 * isSymbol('abc')
 * // => false
 * ```
 *
 * @param value The value to check
 * @returns `true` if `value` is a symbol, else `false`
 *
 * @category Validator
 */
export function isSymbol(value: unknown): value is symbol {
	const type = typeof value;
	return type === "symbol" || (isObjectLike(value) && hasSymbolTag(value));
}
