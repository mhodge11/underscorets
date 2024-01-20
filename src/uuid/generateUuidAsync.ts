import { generateUuid } from "./generateUuid.ts";

/**
 * Asynchronously generates a UUID.
 *
 * *Based on the [nanoid](https://github.com/ai/nanoid) package.*
 *
 * @example
 * ```ts
 * console.log(await generateUuidAsync());
 * //=> "01a2b3c4d5e6f7g8h9i01"
 *
 * console.log(await generateUuidAsync(10));
 * //=> "01a2b3c4d5"
 * ```
 *
 * @param size Size of the UUID.
 * @returns A promise resolving to UUID.
 */
export async function generateUuidAsync(size = 21) {
	return generateUuid(size);
}
