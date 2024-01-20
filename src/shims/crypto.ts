import { warnNoCrypto } from "./utils.ts";

let webcrypto = crypto;

if (typeof webcrypto === "undefined")
	try {
		// @ts-expect-error: node:crypto is a valid import
		webcrypto = await import("node:crypto");
	} catch {
		warnNoCrypto();
	}

export { webcrypto as crypto };
