import { crypto } from "../../src/index.ts";

test("generate a random string of the specified length", () => {
	expect(crypto.randomString(8)).toHaveLength(8);
});

test("use the provided charSet when generating the string", () => {
	const charSet = "abc";
	expect(crypto.randomString(16, charSet)).toMatch(/^[a-c]+$/);
});

test("use the default charset when no charset is provided", () => {
	expect(crypto.randomString(16)).toMatch(/^[\dA-Za-z]+$/);
});

test("return an empty string when the length is 0", () => {
	expect(crypto.randomString(0)).toEqual("");
});

test("return an empty string when the charset is empty", () => {
	expect(crypto.randomString(16, "")).toEqual("");
});
