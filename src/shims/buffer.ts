import { warnNoBuffer } from "./utils.ts";

let buffer = Buffer;

if (typeof buffer === "undefined")
	try {
		({ Buffer: buffer } = await import("node:buffer"));
	} catch {
		warnNoBuffer();
	}

export { buffer as Buffer };
