export type FlattenedArray<A, D extends number> = {
	done: A;
	recur: A extends ReadonlyArray<infer InnerArr>
		? FlatArray<
				InnerArr,
				[
					-1,
					0,
					1,
					2,
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					12,
					13,
					14,
					15,
					16,
					17,
					18,
					19,
					20,
				][D]
		  >
		: A;
}[D extends -1 ? "done" : "recur"];
