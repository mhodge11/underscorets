import { KSUID } from "./ksuid";

/**
 * Generates a new KSUID.
 *
 * @example
 * ```ts
 * const ksuid = generateKsuid();
 * ```
 *
 * @param timestamp (?= Date.now()) A date or timestamp in milliseconds since the epoch
 * @returns A KSUID
 *
 * @category KSUID
 */
export function generateKsuid(timestamp: string | number | Date = Date.now()) {
	return KSUID.random(timestamp).toJSON();
}
