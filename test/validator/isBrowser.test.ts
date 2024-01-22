import { isBrowser } from "../../src/index.ts";

beforeEach(() => {
	vi.unstubAllGlobals();
});

test("return true if `globalThis.window` is defined", () => {
	vi.stubGlobal("window", {});
	expect(isBrowser()).toBe(true);
});

test("return false if `globalThis.window` is undefined", () => {
	vi.stubGlobal("window", undefined);
	expect(isBrowser()).toBe(false);
});
