/**
 * Generates a random integer between two given numbers, including those numbers.
 *
 * It uses `crypto.getRandomValues` to generate the random number.
 *
 * *Based on [moderndash.randomInt](https://moderndash.io/docs/randomInt).
 *
 * @example
 * ```ts
 * randomInt(1, 10)
 * // => 5
 * ```
 *
 * @param min The smallest integer that can be generated
 * @param max The largest integer that can be generated
 * @throws {TypeError} If `min` or `max` is not an integer
 * @throws {Error} If `min` is greater than or equal to `max`
 * @returns A random integer between `min` and `max`, including `min` and `max`
 *
 * @category Crypto
 */

export function randomInt(min: number, max: number): number {
	// Taken from https://stackoverflow.com/a/41452318
	if (!Number.isInteger(min))
		throw new TypeError(`Invalid 'min': ${min}. Must be an integer.`);

	if (!Number.isInteger(max))
		throw new TypeError(`Invalid 'max': ${max}. Must be an integer.`);

	if (min >= max)
		throw new Error(
			`Invalid 'max': ${max}. Must be greater than 'min': ${min}.`,
		);

	const range = max - min + 1;
	const randomBytes = Math.ceil(Math.log2(range) / 8);
	const maxRandNumber = 256 ** randomBytes;
	const randomBuffer = new Uint8Array(randomBytes);

	let randomValue: number;
	do {
		crypto.getRandomValues(randomBuffer);
		randomValue = 0;
		for (let i = 0; i < randomBytes; i++)
			randomValue = (randomValue << 8) + (randomBuffer[i] as number);
		// rerun if randomValue is bigger than range
	} while (randomValue >= maxRandNumber - (maxRandNumber % range));

	return min + (randomValue % range);
}
