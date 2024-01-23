import { decMinCalls } from "@decorator/index.ts";

test("decorator", () => {
	class TestClass {
		@decMinCalls(2)
		testMethod() {
			return 1;
		}
	}
	const instance = new TestClass();
	expect(instance.testMethod()).toBeUndefined();
	expect(instance.testMethod()).toBeUndefined();
	expect(instance.testMethod()).toBe(1);
});
