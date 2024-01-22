import { KSUID, compareKsuids } from "../../src/index.ts";

beforeAll(() => {
	vi.useFakeTimers({ now: 14e11, toFake: ["Date"] });
});

test("compareKsuids", () => {
	expect(compareKsuids(KSUID.random().string, KSUID.random().string)).toBe(0);
	expect(
		compareKsuids(
			KSUID.random(new Date(2025, 4, 15).getTime()).string,
			KSUID.random(new Date(2022, 4, 15).getTime()).string,
		),
	).toBe(1);
	expect(
		compareKsuids(
			KSUID.random(new Date(2022, 4, 15).getTime()).string,
			KSUID.random(new Date(2025, 4, 15).getTime()).string,
		),
	).toBe(-1);
});
