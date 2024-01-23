export type ToArray<T> = (T extends ArrayLike<infer U>
	? U
	: T extends unknown[]
	  ? T[number]
	  : T extends Map<infer K, infer V>
		  ? [K, V]
		  : T extends Set<infer U>
			  ? U
			  : T extends Record<PropertyKey, infer V>
				  ? V
				  : T extends Iterable<[unknown, infer U]>
					  ? U
					  : T extends IterableIterator<[unknown, infer U]>
						  ? U
						  : unknown)[];
