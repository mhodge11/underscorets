import type { Jsonifiable } from "../type/Jsonifiable";
import type { PlainObject } from "../type/PlainObject";
import type { Primitive } from "../type/Primitive";
import type { TypedArray } from "../type/TypedArray";

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
} from "../helpers/getTag";
import { isArguments } from "../validate/isArguments";
import { isArrayLike } from "../validate/isArrayLike";
import { isBuffer } from "../validate/isBuffer";
import { isEqual } from "../validate/isEqual";
import { isObject } from "../validate/isObject";
import { isTypedArray } from "../validate/isTypedArray";

type Key = Jsonifiable | Primitive;

const HASH_UNDEFINED = "__hash_undefined__";

function toKey(value: Key): string {
	if (typeof value === "string") return value;
	if (typeof value === "number") return value.toString();
	if (typeof value === "boolean") return value.toString();
	if (value === null) return "null";
	if (value === undefined) return "undefined";
	return JSON.stringify(value);
}

class HashCache {
	data: { [key: string]: any | typeof HASH_UNDEFINED } = Object.create(null);
	size: number = 0;

	constructor(entries?: [Key, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index: number = -1;

		while (++index < length) {
			const entry: [Key, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = Object.create(null);
		this.size = 0;
	}

	delete(key: Key): boolean {
		if (!this.has(key)) return false;

		const { data } = this;
		const keyString: string = toKey(key);
		const result: boolean = delete data[keyString];

		this.size--;

		return result;
	}

	get(key: Key): any | undefined {
		const { data } = this;
		const keyString: string = toKey(key);
		const result: any | typeof HASH_UNDEFINED | undefined = data[keyString];

		return result === HASH_UNDEFINED ? undefined : result;
	}

	has(key: Key): boolean {
		const { data } = this;
		const keyString: string = toKey(key);

		return data[keyString] !== undefined;
	}

	set(key: Key, value: any): this {
		this.size += this.has(key) ? 0 : 1;

		const { data } = this;
		const keyString: string = toKey(key);
		data[keyString] = value === undefined ? HASH_UNDEFINED : value;

		return this;
	}
}

function assocIndexOf(array: [any, any][], key: any): number {
	if (!array?.length) return -1;

	let { length } = array;
	while (length--) {
		const entry = array[length];
		if (isEqual((entry as any)[0], key)) return length;
	}

	return -1;
}

class ListCache {
	data: [any, any][] = [];
	size: number = 0;

	constructor(entries?: [any, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index = -1;

		while (++index < length) {
			const entry: [any, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = [];
		this.size = 0;
	}

	delete(key: any): boolean {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) return false;

		const lastIndex = data.length - 1;

		if (index === lastIndex) data.pop();
		else data.splice(index, 1);

		this.size--;

		return true;
	}

	get(key: any): any | undefined {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) return undefined;

		const entry = data[index];
		return (entry as any)[1];
	}

	has(key: any): boolean {
		const { data } = this;
		return assocIndexOf(data, key) > -1;
	}

	set(key: any, value: any): this {
		const { data } = this;
		const index = assocIndexOf(data, key);

		if (index < 0) {
			this.size += 1;
			data.push([key, value]);
		} else {
			const entry = data[index];
			if (entry != null) entry[1] = value;
		}

		return this;
	}
}

interface Data {
	hash: HashCache;
	map: Map<any, any>;
	string: HashCache;
}

type MapData = HashCache | Map<any, any>;

function isKeyable(value: unknown): value is Jsonifiable {
	const type = typeof value;

	return type === "string" ||
		type === "number" ||
		type === "symbol" ||
		type === "boolean"
		? value !== "__proto__"
		: value === null;
}

function getMapData(map: MapCache, key: unknown): MapData {
	const { data } = map;

	if (isKeyable(key)) {
		const id = typeof key === "string" ? "string" : "hash";
		return data[id];
	}

	return data.map;
}

class MapCache {
	data: Data = {
		hash: new HashCache(),
		map: new Map<any, any>(),
		string: new HashCache(),
	};
	size: number = 0;

	constructor(entries?: [any, any][]) {
		this.clear();

		if (entries == null) return;

		const { length } = entries;
		let index: number = -1;

		while (++index < length) {
			const entry: [any, any] | undefined = entries[index];
			if (entry != null) this.set(entry[0], entry[1]);
		}
	}

	clear(): void {
		this.data = {
			hash: new HashCache(),
			map: new Map<any, any>(),
			string: new HashCache(),
		};
		this.size = 0;
	}

	delete(key: any): boolean {
		const data = getMapData(this, key);
		let result = false;

		if (!isKeyable(key)) {
			const map = new Map();

			for (const [mapKey, mapValue] of data as Map<any, any>)
				if (!isEqual(mapKey, key)) map.set(mapKey, mapValue);
				else result = true;

			this.data.map = map;
		} else result = data.delete(key);

		this.size -= result ? 1 : 0;

		return result;
	}

	get(key: any): any | undefined {
		const data = getMapData(this, key);

		if (!isKeyable(key)) {
			for (const [mapKey] of data as Map<any, any>)
				if (isEqual(mapKey, key)) return data.get(mapKey);

			return undefined;
		}

		return data.get(key);
	}

	has(key: any): boolean {
		const data = getMapData(this, key);

		if (!isKeyable(key)) {
			for (const [mapKey] of data as Map<any, any>)
				if (isEqual(mapKey, key)) return true;

			return false;
		}

		return data.has(key);
	}

	set(key: any, value: any): this {
		const data = getMapData(this, key);
		const size = data.size;

		data.set(key, value);

		this.size += data.size === size ? 0 : 1;

		return this;
	}
}

const LARGE_ARRAY_SIZE = 200;

class StackCache {
	data: ListCache | MapCache;

	get size(): number {
		return this.data.size;
	}

	constructor(entries?: [any, any][]) {
		this.data = new ListCache(entries);
	}

	clear(): void {
		this.data = new ListCache();
	}

	delete(key: any): boolean {
		const { data } = this;
		const result = data.delete(key);

		return result;
	}

	get(key: any): any | undefined {
		const { data } = this;
		return data.get(key);
	}

	has(key: any): boolean {
		const { data } = this;
		return data.has(key);
	}

	set(key: any, value: any): this {
		let { data } = this;

		if (data instanceof ListCache) {
			const pairs = data.data;

			if (pairs.length < LARGE_ARRAY_SIZE - 1) {
				data.set(key, value);
				return this;
			}

			data = this.data = new MapCache(pairs);
		}

		data.set(key, value);

		return this;
	}
}

const reIsUint = /^(?:0|[1-9]\d*)$/;

/** Clone flags */
export const CLONE_DEEP_FLAG = 1;
export const CLONE_SYMBOLS_FLAG = 4;

export function assertUnreachable(msg?: string): never {
	const prefix: string = "Invariant failed";
	throw new Error(
		process.env.NODE_ENV === "production" ? prefix : `${prefix}: ${msg ?? ""}`,
	);
}

function isPrototype(value: unknown): boolean {
	if (value == null) return false;

	const Ctor: Function = value?.constructor;
	const proto: Function =
		(typeof Ctor === "function" && Ctor.prototype) || Object.prototype;

	return value === proto;
}

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

function eq(a: unknown, b: unknown): boolean {
	return a === b || (a !== a && b !== b);
}

function baseAssignValue(
	object: object,
	key: PropertyKey,
	value: unknown,
): void {
	if (key === "__proto__")
		Object.defineProperty(object, key, {
			configurable: true,
			enumerable: true,
			value: value,
			writable: true,
		});
	else (object as any)[key] = value;
}

function assignValue(object: object, key: PropertyKey, value: unknown): void {
	const objValue = (object as any)[key];

	if (
		!(Object.prototype.hasOwnProperty.call(object, key) && eq(objValue, value))
	) {
		if (value !== 0 || 1 / value === 1 / (objValue as any))
			baseAssignValue(object, key, value);
	} else if (value === undefined && !(key in object))
		baseAssignValue(object, key, value);
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

function getSymbols<T extends object>(object: T): Extract<keyof T, symbol>[] {
	if (object == null) return [];

	object = Object(object);

	return Object.getOwnPropertySymbols(object).filter((symbol) =>
		Object.prototype.propertyIsEnumerable.call(object, symbol),
	) as Extract<keyof T, symbol>[];
}

function getAllKeys<T extends object>(object: T): (keyof T)[] {
	let allKeys: (keyof T)[] = [];

	if (isArrayLike(object)) allKeys = arrayLikeKeys(object) as (keyof T)[];
	else allKeys = Object.keys(object as PlainObject) as (keyof T)[];

	if (!Array.isArray(object))
		allKeys.push(...(getSymbols(object) as (keyof T)[]));

	return allKeys;
}

function cloneArrayBuffer<T extends ArrayBuffer | ArrayBufferLike>(
	arrayBuffer: T,
): T {
	const result: ArrayBuffer = new ArrayBuffer(arrayBuffer.byteLength);
	new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	return result as T;
}

function cloneBuffer<T extends Buffer>(buffer: T, isDeep?: boolean): T {
	if (isDeep) return buffer.subarray() as T;

	const { length } = buffer;
	const result: Buffer = Buffer?.allocUnsafe(length) ?? Buffer?.alloc(length);

	buffer.copy(result);

	return result as T;
}

function cloneDataView<T extends DataView>(dataView: T, isDeep?: boolean): T {
	const buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	return new DataView(buffer, dataView.byteOffset, dataView.byteLength) as T;
}

function cloneRegExp<T extends RegExp>(regexp: T): T {
	const result: RegExp = new RegExp(regexp.source, regexp.flags);
	result.lastIndex = regexp.lastIndex;
	return result as T;
}

function cloneSymbol<T extends symbol>(symbol: T): T {
	return Object(Symbol.prototype.valueOf.call(symbol)) as T;
}

function cloneTypedArray<T extends TypedArray>(
	typedArray: T,
	isDeep?: boolean,
): T {
	const buffer = isDeep
		? cloneArrayBuffer(typedArray.buffer)
		: typedArray.buffer;

	if (typedArray instanceof Int8Array)
		return new Int8Array(buffer, typedArray.byteOffset, typedArray.length) as T;

	if (typedArray instanceof Uint8Array)
		return new Uint8Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint8ClampedArray)
		return new Uint8ClampedArray(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Int16Array)
		return new Int16Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint16Array)
		return new Uint16Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Int32Array)
		return new Int32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Uint32Array)
		return new Uint32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Float32Array)
		return new Float32Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof Float64Array)
		return new Float64Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	if (typedArray instanceof BigInt64Array)
		return new BigInt64Array(
			buffer,
			typedArray.byteOffset,
			typedArray.length,
		) as T;

	assertUnreachable("TypedArray is invalid");
}

function copyArray<T>(source: readonly T[], array?: T[]): T[] {
	if (source == null) return [];

	let index: number = -1;
	const { length } = source;

	array ??= new Array(length);

	for (const value of source) array[++index] = value;

	return array;
}

function copyObject<T extends object, K extends keyof T>(
	source: T,
	props: K[],
	object?: Partial<T>,
	customizer?: <R = unknown>(
		objectValue: T[K] | undefined,
		sourceValue: T[K],
		key: K,
		object: Partial<T>,
		source: T,
	) => R,
): T | Partial<T> {
	const isNew = !object;
	object = (object || {}) as Partial<T>;

	for (const key of props) {
		let newValue = customizer
			? customizer((object as any)[key], source[key], key, object, source)
			: undefined;

		if (newValue === undefined) newValue = source[key];
		if (isNew) baseAssignValue(object, key, newValue);
		else assignValue(object, key, newValue);
	}

	return object as T | Partial<T>;
}

function copySymbols<T extends object>(
	source: T,
	object?: Partial<T>,
): T | Partial<T> {
	return copyObject(source, getSymbols(source) as (keyof T)[], object) as
		| T
		| Partial<T>;
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

export function baseClone<T>(
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
				baseClone(
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
				baseClone(
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

	(props || (value as (keyof T)[])).forEach((subValue, key) => {
		if (props) {
			key = subValue as number;
			subValue = (value as any)[key];
		}

		// Recursively populate clone (susceptible to call stack limits).
		assignValue(
			result as Record<PropertyKey, unknown>,
			key as PropertyKey,
			baseClone(
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
