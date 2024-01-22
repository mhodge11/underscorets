import { debounce } from "../../src/index.ts";

const testFn = vi.fn((x: number) => x * 2);

beforeAll(() => {
	vi.useFakeTimers();
});

afterEach(() => {
	testFn.mockClear();
});

test("only calls the function once", () => {
	const debounced = debounce(testFn, 100);

	debounced(1);
	debounced(1);
	debounced(1);

	expect(testFn).not.toHaveBeenCalled();

	vi.advanceTimersByTime(99);
	expect(testFn).not.toHaveBeenCalled();

	vi.advanceTimersByTime(100000);
	expect(testFn).toHaveBeenCalledOnce();
});

test("calls the function again after the wait period", () => {
	const debounced = debounce(testFn, 100);

	debounced(1);
	vi.advanceTimersByTime(50);
	debounced(1);
	vi.advanceTimersByTime(50);
	debounced(1);

	vi.advanceTimersByTime(50);
	expect(testFn).not.toHaveBeenCalled();

	vi.advanceTimersByTime(50);
	expect(testFn).toHaveBeenCalledTimes(1);
});

test("cancel", () => {
	const debounced = debounce(testFn, 100);

	debounced(1);
	debounced.cancel();
	vi.advanceTimersByTime(100);
	expect(testFn).not.toHaveBeenCalled();
});

test("flush", () => {
	const debounced = debounce(testFn, 100);

	debounced(1);
	debounced.flush();
	expect(testFn).toHaveBeenCalledOnce();
});

test("pending", () => {
	const debounced = debounce(testFn, 100);
	expect(debounced.pending()).toBe(false);

	debounced(1);
	expect(debounced.pending()).toBe(true);

	vi.advanceTimersByTime(100);
	expect(debounced.pending()).toBe(false);
});
