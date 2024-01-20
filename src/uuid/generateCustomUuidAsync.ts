import { generateCustomUuid } from "./generateCustomUuid.ts";

/**
 * Asynchronously generates a UUID using a custom alphabet.
 *
 * *Based on the [nanoid](https://github.com/ai/nanoid) package.*
 *
 * @example
 * ```ts
 * const generateUuid = generateCustomUuidAsync("0123456789abcdef");
 *
 * console.log(await generateUuid());
 * //=> "01a2b3c4d5e6f7g8h9i01"
 *
 * console.log(await generateUuid(10));
 * //=> "01a2b3c4d5"
 * ```
 *
 * @param alphabet Custom alphabet to generate the UUID from.
 * @param defaultSize Default size of the UUID.
 * @returns A promise resolving to a function that generates a UUID.
 */
export function generateCustomUuidAsync(alphabet: string, defaultSize = 21) {
	const customUuid = generateCustomUuid(alphabet, defaultSize);
	return async () => customUuid();
}
