import { get } from "@object/index.ts";

test("get returns the value at the specified path", () => {
	const object = { a: { b: { c: 1 } } };
	expect(get(object, "a.b.c")).toBe(1);
});

test("get returns the value at the specified path including array indices", () => {
	const object = { a: { b: [{ c: 1 }] } };
	expect(get(object, "a.b[0].c")).toBe(1);
	expect(get(object, "a.b[0]")).toEqual({ c: 1 });

	const object2 = { a: { b: 1, c: [{ d: 2 }, { d: 3 }] } };
	expect(get(object2, "a.c[1].d")).toBe(3);
});

test("get returns the value at the specified path including array-like indices", () => {
	const object = { a: { b: { "0": { c: 1 } } } };
	expect(get(object, "a.b.0.c")).toBe(1);
});

test("get returns undefined if the path does not exist", () => {
	const object = { a: { b: { c: 1 } } };
	expect(get(object, "a.b.d")).toBe(undefined);
});

test("get throws an error if the path is not valid", () => {
	const object = { a: { b: { c: 1 } } };
	expect(() => get(object, "")).toThrow(Error);
});
