const prefix: string = "Invariant failed";

export function assertUnreachable(msg?: string): never {
	throw new Error(
		process.env.NODE_ENV === "production" ? prefix : `${prefix}: ${msg ?? ""}`,
	);
}
