import { upperFirst } from "../../src/index.ts";

test("should uppercase only the first character", () => {
	expect(upperFirst("fred")).toBe("Fred");
	expect(upperFirst("Fred")).toBe("Fred");
	expect(upperFirst("FRED")).toBe("FRED");
});
