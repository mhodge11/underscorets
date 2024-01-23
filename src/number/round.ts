import { createRound } from "../helpers/createRound.ts";

/**
 * Rounds a number to the given precision.
 *
 * @example
 * ```ts
 * round(1.23456, 2);
 * // => 1.23
 *
 * round(1.235, 1);
 * // => 1.2
 *
 * round(1234.56);
 * // => 1234.56
 * ```
 *
 * @param number The number to be rounded
 * @param precision The number of decimal places to round to. Defaults to 2
 * @returns The rounded number
 *
 * @category Number
 */
export function round(
	number: number | `${number}`,
	precision?: number | `${number}`,
): number {
	return createRound("round")(number, precision);
}
