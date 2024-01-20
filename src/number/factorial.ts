/**
 * Calculates the factorial of a number
 *
 * Returns `1` if the input number is `0`.
 *
 * @example
 * ```ts
 * factorial(0) // => 1
 * factorial(1) // => 1
 * factorial(2) // => 2
 * factorial(3) // => 6
 * factorial(4) // => 24
 * factorial(5) // => 120
 * ```
 *
 * @param number The number to calculate the factorial of (must be an integer)
 * @returns The factorial of the input number
 *
 * @category Number
 */
export function factorial(number: number): number {
	if (!Number.isInteger(number)) throw new Error("Input must be an integer");
	return number === 0 ? 1 : number * factorial(number - 1);
}
