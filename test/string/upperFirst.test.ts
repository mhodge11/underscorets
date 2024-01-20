import { str } from "../../src/index.ts";

test("should uppercase only the first character", () => {
	expect(str.upperFirst("fred")).toBe("Fred");
	expect(str.upperFirst("Fred")).toBe("Fred");
	expect(str.upperFirst("FRED")).toBe("FRED");
});
