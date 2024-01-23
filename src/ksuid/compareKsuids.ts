import { isValidKsuid } from "./isValidKsuid.js";
import { KSUID } from "./ksuid.js";

/**
 * Compare two KSUID strings.
 *
 * @example
 * ```ts
 * const ksuid1 = "1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t6y";
 * const ksuid2 = "1q2w3e4r5t6y7u8i9o0p1q2w3e4r5t6z";
 *
 * compareKsuids(ksuid1, ksuid2);
 * // => -1
 *
 * compareKsuids(ksuid2, ksuid1);
 * // => 1
 *
 * compareKsuids(ksuid1, ksuid1);
 * // => 0
 * ```
 *
 * @param ksuidString KSUID string to compare
 * @param otherKsuidString KSUID string to compare with
 * @returns `1` if `otherKsuidString` represents an earlier date,
 * `-1` if `otherKsuidString` represents a later date,
 * `0` if they are equal
 *
 * @category KSUID
 */
export function compareKsuids(ksuidString: string, otherKsuidString: string) {
	if (!isValidKsuid(ksuidString) || !isValidKsuid(otherKsuidString)) return 0;

	const ksuid1 = KSUID.parse(ksuidString);
	const ksuid2 = KSUID.parse(otherKsuidString);

	return ksuid1.compare(ksuid2);
}
