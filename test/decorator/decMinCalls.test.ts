import { decorator } from "../../src/index.ts";

test("decorator", () => {
	class TestClass {
		@decorator.minCalls(2)
		testMethod() {
			return 1;
		}
	}
	const instance = new TestClass();
	expect(instance.testMethod()).toBeUndefined();
	expect(instance.testMethod()).toBeUndefined();
	expect(instance.testMethod()).toBe(1);
});
