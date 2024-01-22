import type { PlainObject } from "../../src/types/index.ts";

import { flatKeys } from "../../src/index.ts";

test("correct flattened keys", () => {
	const object = { a: 1, b: { c: 2, d: { e: 3 } } };
	expect(flatKeys(object)).toEqual({ a: 1, "b.c": 2, "b.d.e": 3 });
});

test("correct flattened keys", () => {
	const object = { a: 1, b: { c: 2, d: { e: 3 } } };
	const flat = flatKeys(object);
	const flatGeneric = flatKeys(object as PlainObject);

	expectTypeOf(flat).toEqualTypeOf<
		Record<"a" | "b" | "b.c" | "b.d" | "b.d.e", unknown>
	>();
	expectTypeOf(flatGeneric).toEqualTypeOf<Record<string, unknown>>();

	expect(flatKeys(object)).toEqual({ a: 1, "b.c": 2, "b.d.e": 3 });
});

test("correct flattened keys with arrays", () => {
	const object = { a: 1, b: { c: 2, d: [{ e: 3 }, { e: 4, f: { g: 5 } }] } };
	const flat = flatKeys(object);
	expectTypeOf(flat).toEqualTypeOf<
		Record<
			| "a"
			| "b"
			| "b.c"
			| "b.d"
			| `b.d[${number}]`
			| `b.d[${number}].e`
			| `b.d[${number}].f`
			| `b.d[${number}].f.g`,
			unknown
		>
	>();
	expect(flat).toEqual({
		a: 1,
		"b.c": 2,
		"b.d[0].e": 3,
		"b.d[1].e": 4,
		"b.d[1].f.g": 5,
	});
});

test("simple array", () => {
	const object = { a: [1, 2, 3, 4] };
	expect(flatKeys(object)).toEqual({
		"a[0]": 1,
		"a[1]": 2,
		"a[2]": 3,
		"a[3]": 4,
	});
});
