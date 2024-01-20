import { str } from "../../src/index.ts";

test("convert a str to start case", () => {
	expect(str.titleCase("hello world")).toBe("Hello World");
	expect(str.titleCase("HELLO WORLD")).toBe("Hello World");
	expect(str.titleCase("Hello World")).toBe("Hello World");
	expect(str.titleCase("hello-world")).toBe("Hello World");
	expect(str.titleCase("hello_world")).toBe("Hello World");
	expect(str.titleCase("hello  world")).toBe("Hello World");
	expect(str.titleCase("")).toBe("");
});
