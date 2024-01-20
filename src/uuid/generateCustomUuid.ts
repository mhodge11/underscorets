import { random } from "./utils.ts";

/**
 * Generates a UUID using a custom alphabet.
 *
 * *Based on the [nanoid](https://github.com/ai/nanoid) package.*
 *
 * @example
 * ```ts
 * const generateUuid = generateCustomUuid("0123456789abcdef");
 *
 * console.log(generateUuid());
 * //=> "01a2b3c4d5e6f7g8h9i01"
 *
 * console.log(generateUuid(10));
 * //=> "01a2b3c4d5"
 * ```
 *
 * @param alphabet Custom alphabet to generate the UUID from
 * @param defaultSize Default size of the UUID. Defaults to 21
 * @returns A function that generates a UUID
 */
export function generateCustomUuid(alphabet: string, defaultSize = 21) {
	// First, a bitmask is necessary to generate the ID. The bitmask makes bytes
	// values closer to the alphabet size. The bitmask calculates the closest
	// `2^31 - 1` number, which exceeds the alphabet size.
	// For example, the bitmask for the alphabet size 30 is 31 (00011111).
	const mask = (2 << (31 - Math.clz32((alphabet.length - 1) | 1))) - 1;
	// Though, the bitmask solution is not perfect since the bytes exceeding
	// the alphabet size are refused. Therefore, to reliably generate the ID,
	// the random bytes redundancy has to be satisfied.

	// Note: every hardware random generator call is performance expensive,
	// because the system call for entropy collection takes a lot of time.
	// So, to avoid additional system calls, extra bytes are requested in advance.

	// Next, a step determines how many random bytes to generate.
	// The number of random bytes gets decided upon the ID size, mask,
	// alphabet size, and magic number 1.6 (using 1.6 peaks at performance
	// according to benchmarks).
	const step = Math.ceil((1.6 * mask * defaultSize) / alphabet.length);

	return (size = defaultSize) => {
		let id = "";
		while (true) {
			const bytes = random(step);
			// A compact alternative for `for (let i = 0; i < step; i++)`.
			let i = step;
			while (i--) {
				// Adding `|| ''` refuses a random byte that exceeds the alphabet size.
				// biome-ignore lint/style/noNonNullAssertion: <explanation>
				id += alphabet[bytes[i]! & mask] || "";
				if (id.length === size) return id;
			}
		}
	};
}
