export const createRound = (methodName: "ceil" | "floor" | "round") => {
	const operation = Math[methodName];

	return (number: number | `${number}`, precision?: number | `${number}`) => {
		number = +number;
		if (number === 0) return 0;

		precision ??= methodName === "round" ? 2 : 0;
		precision = +precision;

		const factor = 10 ** precision;
		return operation((number + Number.EPSILON) * factor) / factor;
	};
};
