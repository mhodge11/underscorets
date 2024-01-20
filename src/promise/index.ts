import { Queue as _Queue } from "./queue.ts";
import { races as _races } from "./races.ts";
import { retry as _retry } from "./retry.ts";
import { sleep as _sleep } from "./sleep.ts";
import { timeout as _timeout } from "./timeout.ts";
import { tryCatch as _tryCatch } from "./tryCatch.ts";

export namespace promise {
	export type Queue = _Queue;

	export const Queue = _Queue;

	export const races = _races;
	export const retry = _retry;
	export const sleep = _sleep;
	export const timeout = _timeout;
	export const tryCatch = _tryCatch;
}

export {
	_Queue as Queue,
	_races as races,
	_retry as retry,
	_sleep as sleep,
	_timeout as timeout,
	_tryCatch as tryCatch,
};
