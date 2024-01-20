type JsonifiableObject =
	| { [K in string]?: Jsonifiable }
	| { toJSON: () => Jsonifiable };

type JsonifiableArray = readonly Jsonifiable[];

type JsonPrimitive = string | number | boolean | null;

export type Jsonifiable = JsonPrimitive | JsonifiableObject | JsonifiableArray;
