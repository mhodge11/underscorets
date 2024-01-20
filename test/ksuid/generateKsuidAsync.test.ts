import { ksuid } from "../../src/index.ts";

test("generateKsuidAsync", async () => {
	const id = await ksuid.generateKsuidAsync();
	expect(ksuid.isValidKsuid(id)).toBe(true);
});
