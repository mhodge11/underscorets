export const iteratorToArray = <T>(
	iterator: Iterator<T> | IterableIterator<T>,
): T[] => {
	if (iterator == null) return [];

	let data: IteratorResult<T>;
	const array: T[] = [];

	while (!(data = iterator.next()).done) array.push(data.value);

	return array;
};
