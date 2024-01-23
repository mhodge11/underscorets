function warnNoBuffer() {
	const needsBuffer = [
		"`KSUID`",
		"`compareKsuids`",
		"`generateCustomUuid`",
		"`generateCustomUuidAsync`",
		"`generateKsuid`",
		"`generateKsuidAsync`",
		"`generateUuid`",
		"`generateUuidAsync`",
		"`isBuffer`",
	];

	console.warn(
		"Buffer API not available:",
		`${needsBuffer.slice(0, needsBuffer.length - 1).join(", ")} and ${
			needsBuffer[needsBuffer.length - 1]
		} will not work.`,
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
