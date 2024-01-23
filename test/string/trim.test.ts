import { trim } from "@string/index.ts";

test("trim characters", () => {
	expect(trim("abc", "a")).toBe("bc");
	expect(trim("__abc__", "_")).toBe("abc");
	expect(trim("___", "_")).toBe("");
	expect(trim("_$$abc$__", "$_")).toBe("abc");
});

test("trim nothing", () => {
	expect(trim("abc", "rtz")).toBe("abc");
});

test("empty str", () => {
	expect(trim("", "")).toBe("");
});
