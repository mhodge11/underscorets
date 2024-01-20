import { obj } from "../../src/index.ts";

test("obj.get returns the value at the specified path", () => {
	const object = { a: { b: { c: 1 } } };
	expect(obj.get(object, "a.b.c")).toBe(1);
});

test("obj.get returns the value at the specified path including array indices", () => {
	const object = { a: { b: [{ c: 1 }] } };
	expect(obj.get(object, "a.b[0].c")).toBe(1);
	expect(obj.get(object, "a.b[0]")).toEqual({ c: 1 });

	const object2 = { a: { b: 1, c: [{ d: 2 }, { d: 3 }] } };
	expect(obj.get(object2, "a.c[1].d")).toBe(3);
});

test("obj.get returns the value at the specified path including array-like indices", () => {
	const object = { a: { b: { "0": { c: 1 } } } };
	expect(obj.get(object, "a.b.0.c")).toBe(1);
});

test("obj.get returns undefined if the path does not exist", () => {
	const object = { a: { b: { c: 1 } } };
	expect(obj.get(object, "a.b.d")).toBe(undefined);
});

test("obj.get throws an error if the path is not valid", () => {
	const object = { a: { b: { c: 1 } } };
	expect(() => obj.get(object, "")).toThrow(Error);
});
