import { obj } from "../../src/index.ts";

test("obj.set a value", () => {
	const object = { a: { b: 2 } };
	const updatedObj = obj.set(object, "a.c", 1);

	expectTypeOf(updatedObj).toEqualTypeOf<{ a: { b: number; c: number } }>();
	expect(object).toEqual({ a: { b: 2, c: 1 } });

	const updatedObj2 = obj.set(object, "a.c.d", 1);
	expectTypeOf(updatedObj2).toEqualTypeOf<{
		a: { b: number; c: { d: number } };
	}>();
	expect(object).toEqual({ a: { b: 2, c: { d: 1 } } });
});

test("obj.set a value with array path", () => {
	const object = { a: { b: 2, c: [1, 2] } };
	obj.set(object, "a.c[2]", 1);
	expect(object).toEqual({ a: { b: 2, c: [1, 2, 1] } });

	obj.set(object, "a.d[0].c", 3);
	expect(object).toEqual({ a: { b: 2, c: [1, 2, 1], d: [{ c: 3 }] } });

	obj.set(object, "a[0].c", 3);
	expect(object).toEqual({ a: [{ c: 3 }] });
});

// TODO Waiting for fix
// test("recognize number key", () => {
//     const obj = { a: 1 };
//     const updatedObj = obj.set(obj, "a[0]", 4);
//     expectTypeOf(updatedObj).toEqualTypeOf<{ a: number[] }>();
//     expect(obj).toEqual({ a: [4] });
// });

test("throw error on incorrect path format", () => {
	const object = { a: { b: 2 } };
	expect(() => obj.set(object, "a.c[1", 1)).toThrow();
	expect(() => obj.set(object, "a.c.", 1)).toThrow();
});

test("allow _ and $ in path", () => {
	const object = { a: { b: 2 } };
	expect(() => obj.set(object, "a.c_1", 1)).not.toThrow();
	expect(() => obj.set(object, "a.c-$1", 1)).not.toThrow();
});
