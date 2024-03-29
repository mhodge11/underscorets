import { createRound } from "./utils";

/**
 * Computes `number` rounded up to `precision`. (Round up: the smallest integer greater than or equal to a given number.)
 *
 * @example
 * ```ts
 * ceil(4.006)
 * // => 5
 *
 * ceil(6.004, 2)
 * // => 6.01
 *
 * ceil(6040, -2)
 * // => 6100
 * ```
 *
 * @param number The number to round up
 * @param precision The precision to round up to. Defaults to 0
 * @returns The rounded up number
 *
 * @category Number
 */
export function ceil(
	number: number | `${number}`,
	precision?: number | `${number}`,
): number {
	return createRound("ceil")(number, precision);
}
