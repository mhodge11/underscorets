import { decDebounce } from "./debounce.ts";
import { decMaxCalls } from "./maxCalls.ts";
import { decMemoize } from "./memoize.ts";
import { decMinCalls } from "./minCalls.ts";
import { decOnce } from "./once.ts";
import { decThrottle } from "./throttle.ts";
import { toDecorator as _toDecorator } from "./toDecorator.ts";

export namespace decorator {
	export const debounce = decDebounce;
	export const maxCalls = decMaxCalls;
	export const memoize = decMemoize;
	export const minCalls = decMinCalls;
	export const once = decOnce;
	export const throttle = decThrottle;
	export const toDecorator = _toDecorator;
}

export {
	decDebounce,
	decMaxCalls,
	decMemoize,
	decMinCalls,
	decOnce,
	decThrottle,
	_toDecorator as toDecorator,
};
