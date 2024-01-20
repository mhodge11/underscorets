import { decorator } from "../../src/index.ts";

const addOneMock = vi.fn((input: number) => input + 1);

beforeAll(() => {
	vi.useFakeTimers();
});

beforeEach(() => {
	addOneMock.mockClear();
});

test("decorator", () => {
	class TestClass {
		@decorator.throttle(100)
		testMethod() {
			return addOneMock(1);
		}
	}

	const instance = new TestClass();

	instance.testMethod();
	instance.testMethod();
	instance.testMethod();

	expect(addOneMock).toHaveBeenCalledTimes(1);

	vi.advanceTimersByTime(99);
	expect(addOneMock).toHaveBeenCalledTimes(1);

	vi.advanceTimersByTime(1);
	instance.testMethod();
	expect(addOneMock).toHaveBeenCalledTimes(2);
});
