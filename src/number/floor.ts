import { createRound } from "../helpers/createRound.ts";

/**
 * Computes `number` rounded down to `precision`. (Round down: the smallest integer less than or equal to a given number.)
 *
 * @example
 * ```ts
 * floor(4.006)
 * // => 4
 *
 * floor(0.046, 2)
 * // => 0.04
 *
 * floor(4060, -2)
 * // => 4000
 * ```
 *
 * @param number The number to round down
 * @param precision The precision to round down to. Defaults to 0
 * @returns The rounded down number
 *
 * @category Number
 */
export function floor(
	number: number | `${number}`,
	precision?: number | `${number}`,
): number {
	return createRound("floor")(number, precision);
}
