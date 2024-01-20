import { floor } from "../number/floor.ts";

/**
 * Creates an array from start to end (inclusive), stepping by step.
 * If start is larger than end, the array is generated in reverse
 *
 * @example
 * ```ts
 * for (const num of range(1, 5)) {
 *   console.log(num);
 * }
 * // => 1 2 3 4 5
 *
 * // Array of even numbers between 0 and 10:
 * range(0, 10, 2);
 * // => [0, 2, 4, 6, 8, 10]
 *
 * // Descending range:
 * range(5, 0, 2);
 * // => [5, 3, 1]
 * ```
 *
 * @param start Start number of sequence
 * @param end End number of sequence
 * @param step Step between numbers, default: 1
 * @throws {Error} If range is negative or step is 0
 * @returns An array of numbers
 *
 * @category Array
 */
export function range(start: number, end: number, step?: number): number[] {
	step ??= 1;

	if (step <= 0) throw new Error(`Invalid 'step': ${step}. Must be positive.`);

	step = start > end ? -step : step;

	const length = floor(Math.abs((end - start) / step)) + 1;
	console.log(length);
	const result = new Array(length) as number[];

	for (let i = 0; i < length; i++) result[i] = start + i * step;

	return result;
}
