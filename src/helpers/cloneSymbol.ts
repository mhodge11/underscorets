export const cloneSymbol = <T extends symbol>(symbol: T): T =>
	Object(Symbol.prototype.valueOf.call(symbol)) as T;
