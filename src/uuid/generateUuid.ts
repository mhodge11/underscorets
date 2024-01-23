import { fillPool, pool, poolOffset } from "./utils.js";
import { uuidUrlAlphabet } from "./uuidUrlAlphabet.js";

/**
 * Generates a UUID.
 *
 * *Based on [nanoid](https://github.com/ai/nanoid).*
 *
 * @example
 * ```ts
 * console.log(generateUuid());
 * //=> "01a2b3c4d5e6f7g8h9i01"
 *
 * console.log(generateUuid(10));
 * //=> "01a2b3c4d5"
 * ```
 *
 * @param size Size of the UUID
 * @returns A UUID
 *
 * @category UUID
 */
export function generateUuid(size = 21) {
	// `-=` convert `size` to number to prevent `valueOf` abusing
	fillPool((size -= 0));
	let id = "";
	// We are reading directly from the random pool to avoid creating new array
	for (let i = poolOffset - size; i < poolOffset; i++) {
		// It is incorrect to use bytes exceeding the alphabet size.
		// The following mask reduces the random byte in the 0-255 value
		// range to the 0-63 value range. Therefore, adding hacks, such
		// as empty string fallback or magic numbers, is unnecessary because
		// the bitmask trims bytes down to the alphabet size.
		id += uuidUrlAlphabet[(pool[i] as number) & 63];
	}
	return id;
}
