import { warnNoCrypto } from "./utils.ts";

let webcrypto = crypto;

if (typeof webcrypto === "undefined")
	try {
		webcrypto = require("node:crypto");
	} catch {
		warnNoCrypto();
	}

export { webcrypto as crypto };
