import { toPlainObject } from "@misc/index.ts";

test("toPlainObject converts an object to a plain object", () => {
	expect(toPlainObject({ foo: "bar" })).toEqual({ foo: "bar" });
	expect(toPlainObject([1, 2, 3])).toEqual({ 0: 1, 1: 2, 2: 3 });
	expect(toPlainObject("abc")).toEqual({ 0: "a", 1: "b", 2: "c" });
	expect(toPlainObject(123)).toEqual({});
	expect(toPlainObject(null)).toEqual({});
	expect(toPlainObject(undefined)).toEqual({});
});
