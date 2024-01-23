import { isArguments } from "../validate/isArguments.ts";
import { isBuffer } from "../validate/isBuffer.ts";
import { isTypedArray } from "../validate/isTypedArray.ts";
import { isIndex } from "./isIndex.ts";

export function arrayLikeKeys<T>(
	value: ArrayLike<T>,
	inherited?: boolean,
): string[] {
	const isArr: boolean = Array.isArray(value);
	const isArg: boolean = !isArr && isArguments(value);
	const isBuff: boolean = !isArr && !isArg && isBuffer(value);
	const isType: boolean = !isArr && !isArg && !isBuff && isTypedArray(value);
	const skipIndexes: boolean = isArr || isArg || isBuff || isType;
	const length: number = value.length;
	const result: string[] = new Array(skipIndexes ? length : 0);
	let index: number = skipIndexes ? -1 : length;

	while (++index < length) result[index] = `${index}`;

	for (const key in value)
		if (
			(inherited || Object.prototype.hasOwnProperty.call(value, key)) &&
			!(
				skipIndexes &&
				// Safari 9 has enumerable `arguments.length` in strict mode.
				(key === "length" ||
					// Skip index properties.
					isIndex(key, length))
			)
		)
			result.push(key);

	return result;
}
