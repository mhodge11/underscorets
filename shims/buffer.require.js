function warnNoBuffer() {
	if (process.env.NODE_ENV === "production") return;

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
		} will not work. You will also not be able to use \`clone\` or \`cloneDeep\` on buffers.`,
	);
}

let buffer = globalThis.Buffer ?? globalThis.window?.Buffer;

if (typeof buffer === "undefined")
	try {
		({ Buffer: buffer } = require("node:buffer"));
	} catch {
		try {
			({ Buffer: buffer } = require("buffer"));
		} catch {
			warnNoBuffer();
		}
	}

export { buffer as Buffer };
