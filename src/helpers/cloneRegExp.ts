export const cloneRegExp = <T extends RegExp>(regexp: T): T => {
	const result: RegExp = new RegExp(regexp.source, regexp.flags);
	result.lastIndex = regexp.lastIndex;
	return result as T;
};
