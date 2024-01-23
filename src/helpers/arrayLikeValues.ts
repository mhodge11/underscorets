export function arrayLikeValues<T>(
	arrayLike: T[] | readonly T[] | ArrayLike<T>,
): T[] {
	if (!arrayLike?.length) return [];
	if (Array.isArray(arrayLike)) return arrayLike;
	return Array.prototype.slice.call(arrayLike);
}
