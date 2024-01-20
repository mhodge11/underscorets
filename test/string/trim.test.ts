import { str } from "../../src/index.ts";

test("str.trim characters", () => {
	expect(str.trim("abc", "a")).toBe("bc");
	expect(str.trim("__abc__", "_")).toBe("abc");
	expect(str.trim("___", "_")).toBe("");
	expect(str.trim("_$$abc$__", "$_")).toBe("abc");
});

test("str.trim nothing", () => {
	expect(str.trim("abc", "rtz")).toBe("abc");
});

test("empty str", () => {
	expect(str.trim("", "")).toBe("");
});
