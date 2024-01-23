import type { PlainObject } from "../type/PlainObject";

import { isArguments } from "../validate/isArguments";
import { isArrayLike } from "../validate/isArrayLike";
import { isBuffer } from "../validate/isBuffer";
import { isTypedArray } from "../validate/isTypedArray";
import { getSymbols } from "./getSymbols";

const reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(value: unknown, length?: number) {
	const type = typeof value;

	length ??= Number.MAX_SAFE_INTEGER;

	return (
		!!length &&
		(type === "number" || (type !== "symbol" && reIsUint.test(value as any))) &&
		(value as any) > -1 &&
		(value as any) % 1 === 0 &&
		(value as any) < length
	);
}

function arrayLikeKeys<T>(value: ArrayLike<T>, inherited?: boolean): string[] {
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

export function getAllKeys<T extends object>(object: T): (keyof T)[] {
	let allKeys: (keyof T)[] = [];

	if (isArrayLike(object)) allKeys = arrayLikeKeys(object) as (keyof T)[];
	else allKeys = Object.keys(object as PlainObject) as (keyof T)[];

	if (!Array.isArray(object))
		allKeys.push(...(getSymbols(object) as (keyof T)[]));

	return allKeys;
}
