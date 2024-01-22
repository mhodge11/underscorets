import { decOnce } from "../../src/index.ts";

test("decorator", () => {
	class TestClass {
		private count = 0;

		@decOnce()
		testMethod() {
			return ++this.count;
		}
	}
	const instance = new TestClass();
	expect(instance.testMethod()).toBe(1);
	expect(instance.testMethod()).toBe(1);
	expect(instance.testMethod()).toBe(1);
});
