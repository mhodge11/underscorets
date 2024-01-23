import { tryCatch } from "@promise/index.ts";

test("resolve to an array with the result and null error if the promise resolves", async () => {
	const result = "Hello, world!";
	const prom = Promise.resolve(result);

	const [data, error] = await tryCatch(prom);

	expect(data).toEqual(result);
	expect(error).toBeUndefined();
});

test("resolve to an array with undefined result and an error object if the promise rejects", async () => {
	const error = new Error("Oops!");
	const prom = Promise.reject(error);

	const [data, actualError] = await tryCatch(prom);

	expect(data).toBeUndefined();
	expect(actualError).toBeInstanceOf(Error);
	expect(actualError?.message).toEqual(error.message);
});

test("re-throw non-Error exceptions", async () => {
	const prom = Promise.reject(123);
	await expect(tryCatch(prom)).rejects.toBe(123);
});
