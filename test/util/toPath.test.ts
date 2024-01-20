import { util } from "../../src/index.ts";

test("util.toPath converts a string to a path", () => {
	expect(util.toPath(["a", "b", "c"])).toEqual("a.b.c");
	expect(util.toPath(["a", "b", "0", "c"])).toEqual("a.b.0.c");
	expect(util.toPath(["a", "b", 0, "c"])).toEqual("a.b[0].c");
	expect(util.toPath([""])).toEqual("");
	expect(util.toPath([])).toEqual("");
});
