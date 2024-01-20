import { average as _average } from "./average.ts";
import { ceil as _ceil } from "./ceil.ts";
import { clamp as _clamp } from "./clamp.ts";
import { factorial as _factorial } from "./factorial.ts";
import { floor as _floor } from "./floor.ts";
import { median as _median } from "./median.ts";
import { round as _round } from "./round.ts";
import { sum as _sum } from "./sum.ts";

export namespace num {
	export const average = _average;
	export const ceil = _ceil;
	export const clamp = _clamp;
	export const factorial = _factorial;
	export const floor = _floor;
	export const median = _median;
	export const round = _round;
	export const sum = _sum;
}

export {
	_average as average,
	_ceil as ceil,
	_clamp as clamp,
	_factorial as factorial,
	_floor as floor,
	_median as median,
	_round as round,
	_sum as sum,
};
