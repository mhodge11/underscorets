import { arrayLikeValues } from "../helpers/arrayLikeValues.ts";
import { floor } from "../number/floor.ts";

/**
 * Creates a new array of shuffled values, using the Fisher-Yates-Durstenfeld Shuffle algorithm.
 *
 * @example
 * ```ts
 * shuffle([1, 2, 3, 4])
 * // => [4, 1, 3, 2]
 * ```
 *
 * @param array Array to shuffle
 * @template T The type of the array elements
 * @returns A new shuffled array
 *
 * @category Array
 */
export function shuffle<T>(array: readonly T[]): T[] {
	const arr = arrayLikeValues(array);
	if (!arr?.length) return [];

	const shuffledArray = [...arr];

	for (let i = shuffledArray.length - 1; i > 0; i--) {
		const j = floor(Math.random() * (i + 1));

		[shuffledArray[i], shuffledArray[j]] = [
			shuffledArray[j],
			shuffledArray[i],
		] as [T, T];
	}

	return shuffledArray;
}
