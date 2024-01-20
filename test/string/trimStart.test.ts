import { str } from "../../src/index.ts";

test("trim characters", () => {
	expect(str.trimStart("abc", "a")).toBe("bc");
	expect(str.trimStart("__abc__", "_")).toBe("abc__");
	expect(str.trimStart("___", "_")).toBe("");
	expect(str.trimStart("_$$abc$__", "$_")).toBe("abc$__");
});

test("trim nothing", () => {
	expect(str.trimStart("abc", "rtz")).toBe("abc");
});

test("empty str", () => {
	expect(str.trimStart("", "")).toBe("");
});
