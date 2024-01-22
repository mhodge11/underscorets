import { trimStart } from "../../src/index.ts";

test("trim characters", () => {
	expect(trimStart("abc", "a")).toBe("bc");
	expect(trimStart("__abc__", "_")).toBe("abc__");
	expect(trimStart("___", "_")).toBe("");
	expect(trimStart("_$$abc$__", "$_")).toBe("abc$__");
});

test("trim nothing", () => {
	expect(trimStart("abc", "rtz")).toBe("abc");
});

test("empty str", () => {
	expect(trimStart("", "")).toBe("");
});
