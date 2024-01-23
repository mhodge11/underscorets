import { decMaxCalls } from "@decorator/index.ts";

test("decorator", () => {
	class TestClass {
		private count = 0;
		@decMaxCalls(2)
		testMethod() {
			return ++this.count;
		}
	}
	const instance = new TestClass();
	expect(instance.testMethod()).toBe(1);
	expect(instance.testMethod()).toBe(2);
	expect(instance.testMethod()).toBe(2);
});
