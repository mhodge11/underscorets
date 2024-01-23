import type { Primitive } from "../Primitive";
import type {
	$,
	Equal,
	Fn,
	PartialApply,
	Prettify,
	UnionToIntersection,
	_,
	unset,
} from "./utils";

interface ToNumber extends Fn {
	return: this["arg0"] extends `${infer n extends number | bigint}` ? n : never;
}

type KeysImpl<src> = src extends readonly unknown[]
	? {
			[key in keyof src]: key;
	  }[number] extends infer res
		? res extends string
			? $<ToNumber, res> & keyof src
			: res & keyof src
		: never
	: keyof src;

export interface Keys extends Fn {
	return: KeysImpl<this["arg0"]>;
}

type ValuesImpl<src> = KeysImpl<src> extends infer keys extends keyof src
	? src[keys]
	: never;

export interface Values extends Fn {
	return: ValuesImpl<this["arg0"]>;
}

type JoinPath<A extends string, B extends string, Sep extends string = ""> = [
	A,
] extends [never]
	? B
	: [B] extends [never]
	  ? A
	  : `${A}${Sep}${B}`;

export type AllPathsImpl<
	T,
	ParentPath extends string = never,
> = T extends Primitive
	? ParentPath
	: unknown extends T
	  ? JoinPath<ParentPath, string, ".">
	  : T extends readonly any[]
		  ? KeysImpl<T> extends infer key extends string | number
				?
						| JoinPath<ParentPath, `[${key}]`>
						| AllPathsImpl<T[number], JoinPath<ParentPath, `[${key}]`>>
				: never
		  : keyof T extends infer key extends keyof T & string
			  ? key extends any
					?
							| JoinPath<ParentPath, key, ".">
							| AllPathsImpl<T[key], JoinPath<ParentPath, key, ".">>
					: never
			  : ParentPath;

export interface AllPaths extends Fn {
	return: AllPathsImpl<this["arg0"]>;
}

type ParsePath<
	path,
	output extends string[] = [],
	currentChunk extends string = "",
> = path extends number
	? [`${path}`]
	: path extends `${infer first}${infer rest}`
	  ? first extends "." | "[" | "]"
			? ParsePath<
					rest,
					[...output, ...(currentChunk extends "" ? [] : [currentChunk])],
					""
			  >
			: ParsePath<rest, output, `${currentChunk}${first}`>
	  : [...output, ...(currentChunk extends "" ? [] : [currentChunk])];

type RecursiveGet<Obj, pathList> = Obj extends any
	? pathList extends [infer first, ...infer rest]
		? first extends keyof Obj
			? RecursiveGet<Obj[first], rest>
			: [first, Obj] extends [`${number}` | "number", readonly any[]]
			  ? RecursiveGet<Extract<Obj, any[]>[number], rest>
			  : undefined
		: Obj
	: never;

type GetFromPath<Obj, path> = RecursiveGet<Obj, ParsePath<path>>;

interface GetFn extends Fn {
	return: this["args"] extends [
		infer path extends string | number,
		infer obj,
		...any,
	]
		? GetFromPath<obj, path>
		: never;
}

export type Get<
	path extends string | number | _ | unset = unset,
	obj = unset,
> = PartialApply<GetFn, [path, obj]>;

type Assign<xs extends readonly any[]> = Prettify<
	UnionToIntersection<xs[number]>
>;

type RecursiveUpdate<obj, pathList, fnOrValue> = obj extends any
	? pathList extends [infer first, ...infer rest]
		? first extends keyof obj
			? {
					[K in keyof obj]: Equal<first, K> extends true
						? RecursiveUpdate<obj[K], rest, fnOrValue>
						: obj[K];
			  }
			: [first, obj] extends ["number", readonly any[]]
			  ? RecursiveUpdate<Extract<obj, any[]>[number], rest, fnOrValue>[]
			  : Assign<
						[
							obj,
							{
								[K in Extract<first, PropertyKey>]: RecursiveUpdate<
									{},
									rest,
									fnOrValue
								>;
							},
						]
				  >
		: fnOrValue extends Fn
		  ? $<Extract<fnOrValue, Fn>, obj>
		  : fnOrValue
	: never;

type UpdateFromPath<obj, path, fnOrValue> = RecursiveUpdate<
	obj,
	ParsePath<path>,
	fnOrValue
>;

interface UpdateFn extends Fn {
	return: this["args"] extends [
		infer path extends string | number,
		infer fnOrValue,
		infer obj,
		...any,
	]
		? UpdateFromPath<obj, path, fnOrValue>
		: never;
}

export type Update<
	path extends string | number | _ | unset = unset,
	fnOrValue = unset,
	obj = unset,
> = PartialApply<UpdateFn, [path, fnOrValue, obj]>;
