import { KSUID } from "./ksuid.js";

/**
 * Asynchronously generates a new KSUID.
 *
 * @example
 * ```ts
 * const ksuid = await generateKsuidAsync();
 * ```
 *
 * @param timestamp (?= Date.now()) A date or timestamp in milliseconds since the epoch
 * @returns A KSUID
 *
 * @category KSUID
 */
export async function generateKsuidAsync(
	timestamp: string | number | Date = Date.now(),
) {
	return (await KSUID.randomAsync(timestamp)).toJSON();
}
