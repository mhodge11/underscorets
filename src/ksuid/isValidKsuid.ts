import { KSUID } from "./ksuid";
import { debase62 } from "./utils";

/**
 * Checks if a KSUID string is a valid KSUID.
 *
 * @example
 * ```ts
 * isValidKsuid("aWgEPTl1tmebfsQzFP4bxwgy80V");
 * // => true
 *
 * isValidKsuid("notaKSUID");
 * // => false
 * ```
 *
 * @param ksuidString A possible KSUID string
 * @returns `true` if the string is a valid KSUID, `false` otherwise
 *
 * @category KSUID
 */
export function isValidKsuid(ksuidString: string) {
	return KSUID.isValid(debase62(ksuidString));
}
