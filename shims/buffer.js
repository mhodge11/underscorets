function warnNoBuffer() {
	console.warn(
		"Buffer API not available:",
		"`isBuffer` will not work. Use `isUint8Array` instead.",
	);
}

let buffer = globalThis.Buffer ?? globalThis.window?.Buffer;

if (typeof buffer === "undefined")
	try {
		({ Buffer: buffer } = await import("node:buffer"));
	} catch {
		warnNoBuffer();
	}

export { buffer as Buffer };
