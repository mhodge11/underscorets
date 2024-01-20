import { str } from "../../src/index.ts";

test("should uppercase only the first character", () => {
	expect(str.lowerFirst("fred")).toBe("fred");
	expect(str.lowerFirst("Fred")).toBe("fred");
	expect(str.lowerFirst("FRED")).toBe("fRED");
});
