import { randomInt } from "./randomInt";

function getSingleElement<T>(array: T[]): T {
	const randomIndex = randomInt(0, array.length - 1);
	return array[randomIndex] as T;
}

/**
 * Gets a random element an array. A single element is returned by default.
 * Specify the `multi` parameter to get an array of multiple random elements.
 *
 * If the array is empty, `undefined` is returned.
 * If `multi` is defined it returns an empty array.
 *
 * It uses `crypto.getRandomValues` to get the random element.
 *
 * *Based on [moderndash.randomElement](https://moderndash.io/docs/randomElement).*
 *
 * @example
 * ```ts
 * randomElement([1, 2, 3, 4])
 * // => 2
 *
 * randomElement([1, 2, 3, 4], 2)
 * // => [3, 1]
 * ```
 *
 * @param array The array to sample
 * @param multi The number of elements to sample
 * @template T The type of the array elements
 * @returns Returns the random element
 *
 * @category Crypto
 */
export function randomElement<T>(array: T[]): T | undefined;
export function randomElement<T>(array: T[], multi: number): T[];
export function randomElement<T>(
	array: T[],
	multi?: number,
): T | T[] | undefined {
	if (multi === undefined) {
		if (array.length === 0) return undefined;
		return getSingleElement(array);
	}

	if (multi && array.length === 0) return [];

	// Multiple samples
	const result = new Array<T>(multi);
	for (let i = 0; i < multi; i++) result[i] = getSingleElement(array);
	return result;
}
