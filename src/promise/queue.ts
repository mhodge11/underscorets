/**
 * A class managing an async function queue with limited concurrency (e.g., 10 functions with 3 running at a time).
 *
 * **Methods:**
 * - `add` - Adds an async function or array of functions to the queue. Returns a promise that resolves or rejects when the added function(s) finish.
 * - `clear` - Clears the queue.
 * - `pause` - Pauses the queue.
 * - `resume` - Resumes the queue.
 * - `getQueue` - Returns the current queue.
 * - `isPaused` - Returns whether the queue is paused.
 * - `done` - Returns a promise resolving when all added tasks are finished. Individual rejections don't affect the done() promise.
 *
 * *Based on [moderndash.queue](https://moderndash.io/docs/queue).*
 *
 * @example
 * ```ts
 * // Create a queue that can run 3 tasks concurrently
 * const queue = new Queue(3);
 *
 * queue.add(() => fetch('https://example.com'));
 *
 * queue.add(async () => {
 *   const response = await fetch('https://example.com');
 *   return response.json();
 * });
 *
 * await queue.done();
 * console.log("All tasks finished");
 *
 * // Add an array of tasks to the queue and wait for them to resolve
 * await queue.add([
 *   () => fetch('https://apple.com'),
 *   () => fetch('https://microsoft.com')
 * ]);
 * // => [Response, Response]
 * ```
 *
 * @category Promise
 */
export class Queue {
	private running = 0;
	private maxConcurrent: number;
	private paused = false;
	private queue: QueueElement[] = [];
	private finishedPromise: Promise<boolean> | undefined;
	private finishedResolver: (() => void) | undefined;

	/**
	 * @constructor
	 * @param maxConcurrent The maximum number of async functions to run concurrently.
	 */
	constructor(maxConcurrent: number) {
		this.maxConcurrent = maxConcurrent;
	}

	/**
	 * Add async functions or an array of async functions to the queue.
	 *
	 * @param asyncFn The async function(s) to add to the queue.
	 * @returns A promise that resolves when the added function(s) finishes.
	 */
	add<P, T extends () => Promise<P>>(asyncFn: T): Promise<P>;
	add<P, T extends () => Promise<P>>(asyncFn: T[]): Promise<P[]>;
	add<P, T extends () => Promise<P>>(
		asyncFn: T | T[],
	): Promise<P> | Promise<P[]> {
		if (Array.isArray(asyncFn)) {
			const promises = asyncFn.map((fn) => this.buildWaitingPromise(fn));
			return Promise.all(promises);
		}
		return this.buildWaitingPromise(asyncFn);
	}

	/** Removes all the tasks from the queue */
	clear(): void {
		for (const queueElement of this.queue)
			queueElement.reject(new Error("Queue cleared"));
		this.queue = [];
	}

	/** Pauses the execution of the queue */
	pause(): void {
		this.paused = true;
	}

	/** Resumes the execution of the tasks in the queue */
	resume(): void {
		this.paused = false;
		this.run();
	}

	/** Return the tasks added to the queue */
	getQueue(): (() => Promise<any>)[] {
		return this.queue.map((queueElement) => queueElement.asyncFn);
	}

	/** Returns whether the queue is paused */
	isPaused(): boolean {
		return this.paused;
	}

	/** Returns a shared promise that resolves when the queue is empty and all tasks have finished executing. */
	done(): Promise<boolean> {
		if (this.queue.length === 0 && this.running === 0)
			return Promise.resolve(true);

		this.finishedPromise ??= new Promise(
			(resolve) => (this.finishedResolver = () => resolve(true)),
		);

		return this.finishedPromise;
	}

	private buildWaitingPromise<T>(asyncFn: () => Promise<T>): Promise<T> {
		return new Promise((resolve, reject) => {
			this.queue.push({ asyncFn, resolve, reject });
			this.run();
		});
	}

	private run(): void {
		while (
			this.queue.length > 0 &&
			this.running < this.maxConcurrent &&
			!this.paused
		) {
			this.running++;
			const queueElement = this.queue.shift() as QueueElement;
			void queueElement
				.asyncFn()
				.then((result) => {
					queueElement.resolve(result);
				})
				.catch((error) => {
					queueElement.reject(error);
				})
				.finally(() => {
					this.running--;
					this.run();
				});
		}

		this.checkIfDone();
	}

	private checkIfDone(): void {
		if (
			this.queue.length === 0 &&
			this.running === 0 &&
			this.finishedResolver
		) {
			this.finishedResolver();
			this.finishedPromise = undefined;
			this.finishedResolver = undefined;
		}
	}
}

type QueueElement = {
	asyncFn: () => Promise<any>;
	resolve: (value: any) => void;
	reject: (reason?: any) => void;
};
