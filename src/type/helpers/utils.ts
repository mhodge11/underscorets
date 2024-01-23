declare const rawArgs: unique symbol;
declare const unset: unique symbol;
declare const _: unique symbol;

type rawArgs = typeof rawArgs;
export type unset = typeof unset;
export type _ = typeof _;

export interface Fn {
	[rawArgs]: unknown;
	args: this[rawArgs] extends infer args extends unknown[] ? args : never;
	arg0: this[rawArgs] extends [infer arg, ...any] ? arg : never;
	arg1: this[rawArgs] extends [any, infer arg, ...any] ? arg : never;
	arg2: this[rawArgs] extends [any, any, infer arg, ...any] ? arg : never;
	arg3: this[rawArgs] extends [any, any, any, infer arg, ...any] ? arg : never;
	return: unknown;
}

interface arg<Index extends number, Constraint = unknown> extends Fn {
	return: this["args"][Index] extends infer arg extends Constraint
		? arg
		: never;
}
export interface args<Constraint extends unknown[] = unknown[]> extends Fn {
	return: this["args"] extends infer args extends Constraint ? args : never;
}
export type arg0<Constraint = unknown> = arg<0, Constraint>;
export type arg1<Constraint = unknown> = arg<1, Constraint>;
export type arg2<Constraint = unknown> = arg<2, Constraint>;
export type arg3<Constraint = unknown> = arg<3, Constraint>;

export type Equal<a, b> = (<T>() => T extends a ? 1 : 2) extends <
	T,
>() => T extends b ? 1 : 2
	? true
	: false;

type IsNever<T> = [T] extends [never] ? true : false;

type ExcludePlaceholders<xs, output extends any[] = []> = xs extends [
	infer first,
	...infer rest,
]
	? Equal<first, _> extends true
		? ExcludePlaceholders<rest, output>
		: ExcludePlaceholders<rest, [...output, first]>
	: output;

type MergeArgsRec<
	pipedArgs extends any[],
	partialArgs extends any[],
	output extends any[] = [],
> = partialArgs extends [infer partialFirst, ...infer partialRest]
	? IsNever<partialFirst> extends true
		? MergeArgsRec<pipedArgs, partialRest, [...output, partialFirst]>
		: [partialFirst] extends [_]
		  ? pipedArgs extends [infer pipedFirst, ...infer pipedRest]
				? MergeArgsRec<pipedRest, partialRest, [...output, pipedFirst]>
				: [...output, ...ExcludePlaceholders<partialRest>]
		  : MergeArgsRec<pipedArgs, partialRest, [...output, partialFirst]>
	: [...output, ...pipedArgs];

type EmptyIntoPlaceholder<x> = IsNever<x> extends true
	? never
	: [x] extends [unset]
	  ? _
	  : x;

type MapEmptyIntoPlaceholder<xs, output extends any[] = []> = xs extends [
	infer first,
	...infer rest,
]
	? MapEmptyIntoPlaceholder<rest, [...output, EmptyIntoPlaceholder<first>]>
	: output;

type MergeArgs<
	pipedArgs extends any[],
	partialArgs extends any[],
> = MergeArgsRec<pipedArgs, MapEmptyIntoPlaceholder<partialArgs>>;

export type Apply<fn extends Fn, args extends unknown[]> = (fn & {
	[rawArgs]: args;
})["return"];

export interface PartialApply<fn extends Fn, partialArgs extends unknown[]>
	extends Fn {
	return: MergeArgs<this["args"], partialArgs> extends infer args extends
		unknown[]
		? Apply<fn, args>
		: never;
}

export type $<fn extends Fn, arg0 = _, arg1 = _, arg2 = _, arg3 = _> = (fn & {
	[rawArgs]: ExcludePlaceholders<[arg0, arg1, arg2, arg3]>;
})["return"];

export interface Identity extends Fn {
	return: this["arg0"];
}

export interface Constant<T> extends Fn {
	return: T;
}

export type UnionToIntersection<union> = (
	union extends any
		? (k: union) => void
		: never
) extends (k: infer intersection) => void
	? intersection
	: never;

// type Not<a extends boolean> = a extends true ? false : true;

// type IsTuple<a extends readonly any[]> = a extends
// 	| readonly []
// 	| readonly [any, ...any]
// 	| readonly [...any, any]
// 	? true
// 	: false;

// type IsArrayStrict<a> = a extends readonly any[]
// 	? Not<IsTuple<a>>
// 	: false;

// type RecursivePrettify<T> = IsArrayStrict<T> extends true
// 	? RecursivePrettify<Extract<T, readonly any[]>[number]>[]
// 	: {
// 			[K in keyof T]: RecursivePrettify<T[K]>;
// 	  };

export type Prettify<T> =
	| {
			[K in keyof T]: T[K];
	  }
	| never;
