import type { ArrayHead as _ArrayHead } from "./ArrayHead.ts";
import type { ArrayLast as _ArrayLast } from "./ArrayLast.ts";
import type { ArrayMinLength as _ArrayMinLength } from "./ArrayMinLength.ts";
import type { ArrayTail as _ArrayTail } from "./ArrayTail.ts";
import type { CompareFunction as _CompareFunction } from "./CompareFunction.ts";
import type { FlattenedArray as _FlattenedArray } from "./FlattenedArray.ts";
import type { GenericFunction as _GenericFunction } from "./GenericFunction.ts";
import type { Jsonifiable as _Jsonifiable } from "./Jsonifiable.ts";
import type { PlainObject as _PlainObject } from "./PlainObject.ts";
import type { Primitive as _Primitive } from "./Primitive.ts";
import type { ReducedArray as _ReducedArray } from "./ReducedArray.ts";
import type { TypedArray as _TypedArray } from "./TypedArray.ts";

export namespace types {
	export type ArrayHead<T extends unknown[]> = _ArrayHead<T>;
	export type ArrayLast<T extends unknown[]> = _ArrayLast<T>;
	export type ArrayMinLength<T, MinLength extends number> = _ArrayMinLength<
		T,
		MinLength
	>;
	export type ArrayTail<T extends unknown[]> = _ArrayTail<T>;
	export type CompareFunction<T extends unknown[][] | ArrayLike<unknown>[]> =
		_CompareFunction<T>;
	export type FlattenedArray<A, D extends number> = _FlattenedArray<A, D>;
	export type GenericFunction<T extends (...args: any) => any> =
		_GenericFunction<T>;
	export type Jsonifiable = _Jsonifiable;
	export type PlainObject<T = unknown> = _PlainObject<T>;
	export type Primitive = _Primitive;
	export type ReducedArray<A extends unknown[], Acc> = _ReducedArray<A, Acc>;
	export type TypedArray = _TypedArray;
}

export type {
	_ArrayHead as ArrayHead,
	_ArrayLast as ArrayLast,
	_ArrayMinLength as ArrayMinLength,
	_ArrayTail as ArrayTail,
	_CompareFunction as CompareFunction,
	_FlattenedArray as FlattenedArray,
	_GenericFunction as GenericFunction,
	_Jsonifiable as Jsonifiable,
	_PlainObject as PlainObject,
	_Primitive as Primitive,
	_ReducedArray as ReducedArray,
	_TypedArray as TypedArray,
};
