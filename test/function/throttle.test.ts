import { fn } from "../../src/index.ts";

const addOneMock = vi.fn((input: number) => input + 1);

beforeAll(() => {
	vi.useFakeTimers();
});

beforeEach(() => {
	addOneMock.mockClear();
});

test("only calls the function on in time frame", () => {
	const throttled = fn.throttle(addOneMock, 50);

	throttled(1);
	throttled(2);
	throttled(3);
	expect(addOneMock).toHaveBeenCalledTimes(1);

	vi.advanceTimersByTime(49);
	expect(addOneMock).toHaveBeenCalledTimes(1);

	vi.advanceTimersByTime(1);
	throttled(4);
	expect(addOneMock).toHaveBeenCalledTimes(2);
});

test("return value is last invocation", () => {
	const throttled = fn.throttle(addOneMock, 50);

	let returnValue: ReturnType<typeof throttled>;
	returnValue = throttled(1);
	expect(returnValue).toBe(throttled(3));

	vi.advanceTimersByTime(50);
	returnValue = throttled(4);
	expect(returnValue).toBe(throttled(5));
});
