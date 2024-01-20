const BASE62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const maxLength = (array: number[], from: number, to: number): number =>
	Math.ceil((array.length * Math.log2(from)) / Math.log2(to));

/**
 * Converts arrays of integers from one base to another. Uses an O(N²) algorithm.
 *
 * Solution from package `base-convert-int-array` by GitHub user `novemberborn`.
 *
 * @see https://github.com/novemberborn/base-convert-int-array
 */
const baseConvertIntArray = (
	array: number[],
	{
		from,
		to,
		fixedLength,
	}: { from: number; to: number; fixedLength?: number | undefined },
): number[] => {
	let length = fixedLength;
	if (typeof length === "undefined") length = maxLength(array, from, to);
	const result = new Array(length);

	// Each iteration prepends the resulting value, so start the offset at the end.
	let offset = length;
	let input = array;
	while (input.length > 0) {
		if (offset === 0)
			throw new RangeError(
				`Fixed length of ${fixedLength} is too small, expected at least ${maxLength(
					array,
					from,
					to,
				)}`,
			);

		const quotients: number[] = [];
		let remainder = 0;
		for (const digit of input) {
			const acc = digit + remainder * from;
			const q = Math.floor(acc / to);
			remainder = acc % to;

			if (quotients.length > 0 || q > 0) quotients.push(q);
		}

		result[--offset] = remainder;
		input = quotients;
	}

	// Trim leading padding, unless length is fixed.
	if (typeof fixedLength === "undefined")
		return offset > 0 ? result.slice(offset) : result;

	// Fill in any holes in the result array.
	while (offset > 0) result[--offset] = 0;
	return result;
};

export const base62 = (view: DataView, fixedLength?: number): string => {
	const numbs: number[] = new Array(view.byteLength);

	for (let offset = 0; offset < view.byteLength; offset++)
		numbs[offset] = view.getUint8(offset);

	return baseConvertIntArray(numbs, { from: 256, to: 62, fixedLength })
		.map((value: number) => BASE62[value])
		.join("");
};

/**
 * @see https://github.com/novemberborn/ksuid/blob/90ca4c1508f216e03923de610291786a0d6a868c/base62.js#L13C40-L21C85
 */
export const debase62 = (
	data: string,
	fixedLength?: number,
): ArrayBufferLike => {
	const input = Array.from(data, (char) => {
		const charCode = char.charCodeAt(0);
		if (charCode < 58) return charCode - 48;
		if (charCode < 91) return charCode - 55;
		return charCode - 61;
	});

	return new Uint8Array(
		baseConvertIntArray(input, { from: 62, to: 256, fixedLength }),
	).buffer;
};
