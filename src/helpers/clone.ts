import type { TypedArray } from "../type/TypedArray";

import { each } from "../array/each";
import { StackCache } from "../cache/StackCache";
import { isBuffer } from "../validate/isBuffer";
import { isObject } from "../validate/isObject";
import { isTypedArray } from "../validate/isTypedArray";
import { assertUnreachable } from "./assertUnreachable";
import { assignValue } from "./assignValue";
import { cloneArrayBuffer } from "./cloneArrayBuffer";
import { cloneBuffer } from "./cloneBuffer";
import { cloneDataView } from "./cloneDataView";
import { cloneRegExp } from "./cloneRegExp";
import { cloneSymbol } from "./cloneSymbol";
import { cloneTypedArray } from "./cloneTypedArray";
import { copyArray } from "./copyArray";
import { copySymbols } from "./copySymbols";
import { getAllKeys } from "./getAllKeys";
import {
	argsTag,
	arrayBufferTag,
	boolTag,
	cloneableTags,
	dataViewTag,
	dateTag,
	float32Tag,
	float64Tag,
	getTag,
	int8Tag,
	int16Tag,
	int32Tag,
	mapTag,
	numberTag,
	objectTag,
	regexpTag,
	setTag,
	stringTag,
	symbolTag,
	uint8ClampedTag,
	uint8Tag,
	uint16Tag,
	uint32Tag,
} from "./getTag";

/** Clone flags */
export const CLONE_DEEP_FLAG = 1;
export const CLONE_SYMBOLS_FLAG = 4;

function isPrototype(value: unknown): boolean {
	if (value == null) return false;

	const Ctor: Function = value?.constructor;
	const proto: Function =
		(typeof Ctor === "function" && Ctor.prototype) || Object.prototype;

	return value === proto;
}

function initCloneByTag<T>(object: T, tag: string, isDeep?: boolean): T {
	const Ctor = (object as any).constructor;
	switch (tag) {
		case arrayBufferTag:
			return cloneArrayBuffer(object as ArrayBuffer) as T;
		case boolTag:
		case dateTag:
			return new Ctor(+(object as object)) as T;
		case dataViewTag:
			return cloneDataView(object as DataView, isDeep) as T;
		case float32Tag:
		case float64Tag:
		case int8Tag:
		case int16Tag:
		case int32Tag:
		case uint8Tag:
		case uint8ClampedTag:
		case uint16Tag:
		case uint32Tag:
			return cloneTypedArray(object as TypedArray, isDeep) as T;
		case mapTag:
			return new Ctor() as T;
		case numberTag:
		case stringTag:
			return new Ctor(object as object) as T;
		case regexpTag:
			return cloneRegExp(object as RegExp) as T;
		case setTag:
			return new Ctor() as T;
		case symbolTag:
			return cloneSymbol(object as symbol) as T;
	}

	assertUnreachable(tag);
}

function initCloneObject<T extends object>(object: T): T {
	if (typeof object.constructor === "function" && !isPrototype(object))
		return Object.create(Object.getPrototypeOf(object)) as T;
	return {} as T;
}

function initCloneArray<T>(array: T[] | ArrayLike<T>): T[] {
	const { length } = array;
	const result = new (array as any).constructor(length);

	if (
		length &&
		typeof array[0] === "string" &&
		Object.prototype.hasOwnProperty.call(array, "index")
	) {
		// These properties are assigned by `RegExp#exec`.
		result.index = (array as any).index;
		result.input = (array as any).input;
	}

	return result;
}

export function clone<T>(
	value: T,
	bitmask?: number | undefined,
	customizer?: (
		value: T,
		key?: PropertyKey,
		object?: { [key: PropertyKey]: T },
		stack?: StackCache,
	) => T,
	key?: PropertyKey,
	object?: { [key: PropertyKey]: T },
	stack?: StackCache,
): T {
	bitmask ??= 0;

	let result: T | undefined;
	const isDeep = bitmask & CLONE_DEEP_FLAG;
	const isFull = bitmask & CLONE_SYMBOLS_FLAG;

	if (customizer)
		result = object ? customizer(value, key, object, stack) : customizer(value);

	if (result !== undefined) return result as T;
	if (!isObject(value)) return value;

	const isArr = Array.isArray(value);
	const tag = getTag(value) as keyof typeof cloneableTags;

	if (isArr) {
		result = initCloneArray(value) as T;
		if (!isDeep) return copyArray(value, result as any) as T;
	} else {
		if (isBuffer(value)) return cloneBuffer(value, !!isDeep);

		const isFunc = typeof value === "function";
		if (tag === objectTag || tag === argsTag || (isFunc && !object)) {
			// result = isFlat || isFunc ? ({} as T) : initCloneObject(value);
			result = isFunc ? ({} as T) : initCloneObject(value);

			if (!isDeep)
				return copySymbols(value, Object.assign(result as {}, value)) as T;
		} else {
			if (isFunc || !cloneableTags[tag]) return (object ? value : {}) as T;
			result = initCloneByTag(value, tag, !!isDeep);
		}
	}

	stack ??= new StackCache();

	const stacked = stack.get(value);
	if (stacked) return stacked;

	stack.set(value, result as T);

	if (tag === mapTag) {
		for (const [subValue, key] of (value as T & Map<T, string>).entries())
			(result as T & Map<unknown, unknown>).set(
				key,
				clone(
					subValue,
					bitmask,
					customizer,
					key,
					value as Record<string, T> | undefined,
					stack,
				),
			);

		return result as T;
	}

	if (tag === setTag) {
		for (const subValue of (value as T & Set<T>).values())
			(result as T & Set<unknown>).add(
				clone(
					subValue,
					bitmask,
					customizer,
					subValue as PropertyKey,
					value as Record<string, T> | undefined,
					stack,
				),
			);

		return result as T;
	}

	if (isTypedArray(value)) return result as T;

	const keysFunc = isFull ? getAllKeys : Object.keys;
	const props = isArr ? undefined : keysFunc(value as any);

	each(props || (value as (keyof T)[]), (subValue, key) => {
		if (props) {
			key = subValue as number;
			subValue = (value as any)[key];
		}

		// Recursively populate clone (susceptible to call stack limits).
		assignValue(
			result as Record<PropertyKey, unknown>,
			key as PropertyKey,
			clone(
				subValue as T,
				bitmask,
				customizer,
				key,
				value as Record<string, T> | undefined,
				stack,
			),
		);
	});

	return result as T;
}
