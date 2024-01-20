import { str } from "../../src/index.ts";

test("str.size a str", () => {
	expect(str.size("abc")).toBe(3);
	expect(str.size("")).toBe(0);
	expect(str.size("abc\0")).toBe(4);
	expect(str.size("æiou")).toBe(4);
	expect(str.size("👍")).toBe(1);
});
