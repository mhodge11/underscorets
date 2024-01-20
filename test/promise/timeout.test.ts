import { promise } from "../../src/index.ts";

test("promise.timeout", async () => {
	const result = await promise.timeout(promise.sleep(20), 50);
	expect(result).toBeUndefined();
});

test("promise.timeout with rejected promise", async () => {
	try {
		await promise.timeout(promise.sleep(100), 50);
	} catch (error) {
		const err = error as Error;
		expect(err.message).toBe("Promise timed out after 50ms");
	}
});

test("rejected promise", async () => {
	try {
		await promise.timeout(Promise.reject("rejected"), 50);
	} catch (error) {
		const err = error as Error;
		expect(err).toBe("rejected");
	}
});
