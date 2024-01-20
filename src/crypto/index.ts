import { hash as _hash } from "./hash.ts";
import { randomElement as _randomElement } from "./randomElement.ts";
import { randomFloat as _randomFloat } from "./randomFloat.ts";
import { randomInt as _randomInt } from "./randomInt.ts";
import { randomString as _randomString } from "./randomString.ts";

export namespace crypto {
	export const hash = _hash;
	export const randomElement = _randomElement;
	export const randomFloat = _randomFloat;
	export const randomInt = _randomInt;
	export const randomString = _randomString;
}

export {
	_hash as hash,
	_randomElement as randomElement,
	_randomFloat as randomFloat,
	_randomInt as randomInt,
	_randomString as randomString,
};
