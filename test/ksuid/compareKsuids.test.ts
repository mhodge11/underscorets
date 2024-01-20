import { ksuid } from "../../src/index.ts";

beforeAll(() => {
	vi.useFakeTimers({ now: 14e11, toFake: ["Date"] });
});

test("ksuid.compareKsuids", () => {
	expect(
		ksuid.compareKsuids(
			ksuid.KSUID.random().string,
			ksuid.KSUID.random().string,
		),
	).toBe(0);
	expect(
		ksuid.compareKsuids(
			ksuid.KSUID.random(new Date(2025, 4, 15).getTime()).string,
			ksuid.KSUID.random(new Date(2022, 4, 15).getTime()).string,
		),
	).toBe(1);
	expect(
		ksuid.compareKsuids(
			ksuid.KSUID.random(new Date(2022, 4, 15).getTime()).string,
			ksuid.KSUID.random(new Date(2025, 4, 15).getTime()).string,
		),
	).toBe(-1);
});
