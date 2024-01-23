import { at } from "@object/index.ts";

test("at returns the values at the given paths", () => {
	const object = { a: [{ b: { c: 3 } }, 4] };
	expect(at(object, ["a[0].b.c", "a[1]"])).toEqual([3, 4]);
});

test("at returns undefined if the path does not exist", () => {
	const object = { a: [{ b: { c: 3 } }, 4] };
	expect(at(object, ["a[0].b.d", "a[1]"])).toEqual([undefined, 4]);
});

test("at throws an error if the path is not valid", () => {
	const object = { a: [{ b: { c: 3 } }, 4] };
	expect(() => at(object, [""])).toThrow(Error);
});
