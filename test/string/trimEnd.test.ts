import { str } from "../../src/index.ts";

test("trim characters", () => {
	expect(str.trimEnd("abc", "a")).toBe("abc");
	expect(str.trimEnd("__abc__", "_")).toBe("__abc");
	expect(str.trimEnd("___", "_")).toBe("");
	expect(str.trimEnd("_$$abc$__", "$_")).toBe("_$$abc");
});

test("trim nothing", () => {
	expect(str.trimEnd("abc", "rtz")).toBe("abc");
});

test("empty str", () => {
	expect(str.trimEnd("", "")).toBe("");
});
