import { util } from "../../src/index.ts";

test("util.toString returns a string", () => {
	expect(util.toString("abc")).toBe("abc");
	expect(util.toString(123)).toBe("123");
	expect(util.toString(null)).toBe("");
	expect(util.toString(undefined)).toBe("");
	expect(util.toString(true)).toBe("true");
	expect(util.toString(false)).toBe("false");
	expect(util.toString({})).toBe("[object Object]");
	expect(util.toString([])).toBe("");
	expect(util.toString([1, 2, 3])).toBe("1,2,3");
	expect(util.toString([1, null, 3])).toBe("1,,3");
	expect(util.toString(new Date("2020-01-01"))).toBe(
		"Tue Dec 31 2019 19:00:00 GMT-0500 (Eastern Standard Time)",
	);
	expect(util.toString(new Error("error"))).toBe("Error: error");
	expect(util.toString(new Map())).toBe("[object Map]");
	expect(util.toString(new Set())).toBe("[object Set]");
	expect(util.toString(new WeakMap())).toBe("[object WeakMap]");
	expect(util.toString(new WeakSet())).toBe("[object WeakSet]");
});
