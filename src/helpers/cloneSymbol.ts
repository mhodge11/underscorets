export function cloneSymbol<T extends symbol>(symbol: T): T {
	return Object(Symbol.prototype.valueOf.call(symbol)) as T;
}
