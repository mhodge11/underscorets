import { isNavigator } from "../../src/index.ts";

beforeEach(() => {
	vi.unstubAllGlobals();
});

test("return true if `globalThis.navigator` is defined", () => {
	vi.stubGlobal("navigator", {});
	expect(isNavigator()).toBe(true);
});

test("return false if `globalThis.navigator` is undefined", () => {
	vi.stubGlobal("navigator", undefined);
	expect(isNavigator()).toBe(false);
});
