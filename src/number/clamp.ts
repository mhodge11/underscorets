/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @example
 * ```ts
 * clamp(-10, -5, 5)
 * // => -5
 *
 * clamp(10, -5, 5)
 * // => 5
 * ```
 *
 * @param number The number to clamp
 * @param lower The lower bound
 * @param upper The upper bound
 * @returns The clamped number
 *
 * @category Number
 */
export function clamp(
	number: number | `${number}`,
	lower: number | `${number}`,
	upper: number | `${number}`,
): number {
	number = +number;
	lower = +lower;
	upper = +upper;

	lower = lower === lower ? lower : 0;
	upper = upper === upper ? upper : 0;

	if (number === number) {
		number = number <= upper ? number : upper;
		number = number >= lower ? number : lower;
	}

	return number;
}
