function warnNoCrypto() {
	if (process.env.NODE_ENV === "production") return;

	const needsCrypto = [
		"`KSUID`",
		"`compareKsuids`",
		"`generateCustomUuid`",
		"`generateCustomUuidAsync`",
		"`generateKsuid`",
		"`generateKsuidAsync`",
		"`generateUuid`",
		"`generateUuidAsync`",
		"`hash`",
		"`randomElement`",
		"`randomFloat`",
		"`randomInt`",
		"`randomString`",
	];

	console.warn(
		"Web Crypto API not available:",
		`${needsCrypto.slice(0, needsCrypto.length - 1).join(", ")} and ${
			needsCrypto[needsCrypto.length - 1]
		} will not work.`,
	);
}

let webcrypto = globalThis.crypto ?? globalThis.window?.crypto;

if (typeof webcrypto === "undefined")
	try {
		// @ts-ignore
		({ webcrypto } = await import("node:crypto"));
	} catch {
		try {
			// @ts-ignore
			({ webcrypto } = await import("crypto"));
		} catch {
			warnNoCrypto();
		}
	}

export { webcrypto as crypto };
