import { generateKsuidAsync, isValidKsuid } from "../../src/index.ts";

test("generateKsuidAsync", async () => {
	const id = await generateKsuidAsync();
	expect(isValidKsuid(id)).toBe(true);
});
