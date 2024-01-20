export const warnNoBuffer = () =>
	console.warn(
		"Buffer API not available:",
		"`isBuffer` will not work. Use `isUint8Array` instead.",
	);

export const warnNoCrypto = () => {
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
};
