import type { PlainObject } from "./PlainObject.js";

type OptionalPropertyNames<T> = {
	[K in keyof T]-?: PlainObject extends { [P in K]: T[K] } ? K : never;
}[keyof T];

type SpreadProperties<L, R, K extends keyof L & keyof R> = {
	[P in K]: L[P] | Exclude<R[P], undefined>;
};

type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never;

type SpreadTwo<L, R> = Id<
	Pick<L, Exclude<keyof L, keyof R>> &
		Pick<R, Exclude<keyof R, OptionalPropertyNames<R>>> &
		Pick<R, Exclude<OptionalPropertyNames<R>, keyof L>> &
		SpreadProperties<L, R, OptionalPropertyNames<R> & keyof L>
>;

/**
 * This type is used to merge multiple objects into one.
 *
 * *Based on [hotscript](https://github.com/gvergnaud/HOTScript).*
 *
 * @example
 * ```ts
 * type Foo = {
 *   a: string;
 *   b?: number;
 * };
 *
 * type Bar = {
 *   a?: number;
 *   b: string;
 * };
 *
 * type Baz = {
 *   a: boolean;
 *   b: bigint;
 * };
 *
 * type Qux = ObjectMerge<[Foo, Bar, Baz]>;
 * //=> { a: boolean; b: bigint; }
 * ```
 *
 * @template A The object tuple type
 *
 * @category Type
 */
export type ObjectMerge<A extends readonly [...unknown[]]> = A extends [
	infer L,
	...infer R,
]
	? SpreadTwo<L, ObjectMerge<R>>
	: unknown;
