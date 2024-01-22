import { toString } from "../../src/index.ts";

test("toString returns a string", () => {
	expect(toString("abc")).toBe("abc");
	expect(toString(123)).toBe("123");
	expect(toString(null)).toBe("");
	expect(toString(undefined)).toBe("");
	expect(toString(true)).toBe("true");
	expect(toString(false)).toBe("false");
	expect(toString({})).toBe("[object Object]");
	expect(toString([])).toBe("");
	expect(toString([1, 2, 3])).toBe("1,2,3");
	expect(toString([1, null, 3])).toBe("1,,3");
	expect(toString(new Date("2020-01-01"))).toBe(
		"Tue Dec 31 2019 19:00:00 GMT-0500 (Eastern Standard Time)",
	);
	expect(toString(new Error("error"))).toBe("Error: error");
	expect(toString(new Map())).toBe("[object Map]");
	expect(toString(new Set())).toBe("[object Set]");
	expect(toString(new WeakMap())).toBe("[object WeakMap]");
	expect(toString(new WeakSet())).toBe("[object WeakSet]");
});
