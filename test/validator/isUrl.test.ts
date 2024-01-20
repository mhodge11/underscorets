import { validator } from "../../src/index.ts";

test("validator.isUrl", () => {
	expect(validator.isUrl("https://google.com")).toBe(true);
	expect(validator.isUrl("google.com")).toBe(false);
});
