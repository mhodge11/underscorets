import { attempt as _attempt } from "./attempt.ts";
import { cond as _cond } from "./cond.ts";
import { debounce as _debounce } from "./debounce.ts";
import { defer as _defer } from "./defer.ts";
import { delay as _delay } from "./delay.ts";
import { flip as _flip } from "./flip.ts";
import { flow as _flow } from "./flow.ts";
import { flowRight as _flowRight } from "./flowRight.ts";
import { maxCalls as _maxCalls } from "./maxCalls.ts";
import { memoize as _memoize } from "./memoize.ts";
import { minCalls as _minCalls } from "./minCalls.ts";
import { negate as _negate } from "./negate.ts";
import { once as _once } from "./once.ts";
import { throttle as _throttle } from "./throttle.ts";
import { times as _times } from "./times.ts";

export namespace fn {
	export const attempt = _attempt;
	export const cond = _cond;
	export const debounce = _debounce;
	export const defer = _defer;
	export const delay = _delay;
	export const flip = _flip;
	export const flow = _flow;
	export const flowRight = _flowRight;
	export const maxCalls = _maxCalls;
	export const memoize = _memoize;
	export const minCalls = _minCalls;
	export const negate = _negate;
	export const once = _once;
	export const throttle = _throttle;
	export const times = _times;
}

export {
	_attempt as attempt,
	_cond as cond,
	_debounce as debounce,
	_defer as defer,
	_delay as delay,
	_flip as flip,
	_flow as flow,
	_flowRight as flowRight,
	_maxCalls as maxCalls,
	_memoize as memoize,
	_minCalls as minCalls,
	_negate as negate,
	_once as once,
	_throttle as throttle,
	_times as times,
};
