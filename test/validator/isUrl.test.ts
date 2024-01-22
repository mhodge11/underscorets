import { isUrl } from "../../src/index.ts";

test("isUrl", () => {
	expect(isUrl("https://google.com")).toBe(true);
	expect(isUrl("google.com")).toBe(false);
});
