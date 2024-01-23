export function asciiToArray(string: string): string[] {
	if (string == null) return [];
	return string.split("");
}
