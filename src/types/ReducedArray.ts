export type ReducedArray<A extends unknown[], Acc> = A extends undefined
	? Acc extends undefined
		? undefined
		: Acc
	: A["length"] extends 0
	  ? Acc extends undefined
			? undefined
			: Acc
	  : Acc;
