import { promise } from "../../src/index.ts";

test("resolve after the specified time", async () => {
	const startTime = Date.now();
	await promise.sleep(100);
	// 99 because setTimeout is not 100% accurate
	expect(Date.now() - startTime).toBeGreaterThanOrEqual(99);
});
