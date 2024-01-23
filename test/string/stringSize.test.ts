import { stringSize } from "@string/index.ts";

test("stringSize a str", () => {
	expect(stringSize("abc")).toBe(3);
	expect(stringSize("")).toBe(0);
	expect(stringSize("abc\0")).toBe(4);
	expect(stringSize("æiou")).toBe(4);
	expect(stringSize("👍")).toBe(1);
});
