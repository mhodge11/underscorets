export function isEqualDates(a: Date, b: Date): boolean {
	if (!(a instanceof Date) || !(b instanceof Date)) return false;
	return a.getTime() === b.getTime();
}
