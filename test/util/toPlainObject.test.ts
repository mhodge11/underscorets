import { util } from "../../src/index.ts";

test("util.toPlainObject converts an object to a plain object", () => {
	expect(util.toPlainObject({ foo: "bar" })).toEqual({ foo: "bar" });
	expect(util.toPlainObject([1, 2, 3])).toEqual({ 0: 1, 1: 2, 2: 3 });
	expect(util.toPlainObject("abc")).toEqual({ 0: "a", 1: "b", 2: "c" });
	expect(util.toPlainObject(123)).toEqual({});
	expect(util.toPlainObject(null)).toEqual({});
	expect(util.toPlainObject(undefined)).toEqual({});
});
