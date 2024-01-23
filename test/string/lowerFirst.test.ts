import { lowerFirst } from "@string/index.ts";

test("should uppercase only the first character", () => {
	expect(lowerFirst("fred")).toBe("fred");
	expect(lowerFirst("Fred")).toBe("fred");
	expect(lowerFirst("FRED")).toBe("fRED");
});
