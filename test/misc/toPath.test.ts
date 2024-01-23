import { toPath } from "@misc/index.ts";

test("toPath converts a string to a path", () => {
	expect(toPath(["a", "b", "c"])).toEqual("a.b.c");
	expect(toPath(["a", "b", "0", "c"])).toEqual("a.b.0.c");
	expect(toPath(["a", "b", 0, "c"])).toEqual("a.b[0].c");
	expect(toPath([""])).toEqual("");
	expect(toPath([])).toEqual("");
});
