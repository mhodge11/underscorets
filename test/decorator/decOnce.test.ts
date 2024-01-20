import { decorator } from "../../src/index.ts";

test("decorator", () => {
	class TestClass {
		private count = 0;

		@decorator.once()
		testMethod() {
			return ++this.count;
		}
	}
	const instance = new TestClass();
	expect(instance.testMethod()).toBe(1);
	expect(instance.testMethod()).toBe(1);
	expect(instance.testMethod()).toBe(1);
});
