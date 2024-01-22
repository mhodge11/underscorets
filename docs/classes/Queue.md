[underscorets - v0.1.5](../README.md) / Queue

# Class: Queue

A class managing an async function queue with limited concurrency (e.g., 10 functions with 3 running at a time).

**Methods:**
- `add` - Adds an async function or array of functions to the queue. Returns a promise that resolves or rejects when the added function(s) finish.
- `clear` - Clears the queue.
- `pause` - Pauses the queue.
- `resume` - Resumes the queue.
- `getQueue` - Returns the current queue.
- `isPaused` - Returns whether the queue is paused.
- `done` - Returns a promise resolving when all added tasks are finished. Individual rejections don't affect the done() promise.

*Based on [moderndash.queue](https://moderndash.io/docs/queue).*

**`Example`**

```ts
// Create a queue that can run 3 tasks concurrently
const queue = new Queue(3);

queue.add(() => fetch('https://example.com'));

queue.add(async () => {
  const response = await fetch('https://example.com');
  return response.json();
});

await queue.done();
console.log("All tasks finished");

// Add an array of tasks to the queue and wait for them to resolve
await queue.add([
  () => fetch('https://apple.com'),
  () => fetch('https://microsoft.com')
]);
// => [Response, Response]
```

## Table of contents

### Constructors

- [constructor](Queue.md#constructor)

### Properties

- [finishedPromise](Queue.md#finishedpromise)
- [finishedResolver](Queue.md#finishedresolver)
- [maxConcurrent](Queue.md#maxconcurrent)
- [paused](Queue.md#paused)
- [queue](Queue.md#queue)
- [running](Queue.md#running)

### Methods

- [add](Queue.md#add)
- [buildWaitingPromise](Queue.md#buildwaitingpromise)
- [checkIfDone](Queue.md#checkifdone)
- [clear](Queue.md#clear)
- [done](Queue.md#done)
- [getQueue](Queue.md#getqueue)
- [isPaused](Queue.md#ispaused)
- [pause](Queue.md#pause)
- [resume](Queue.md#resume)
- [run](Queue.md#run)

## Constructors

### constructor

• **new Queue**(`maxConcurrent`): [`Queue`](Queue.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `maxConcurrent` | `number` | The maximum number of async functions to run concurrently. |

#### Returns

[`Queue`](Queue.md)

#### Defined in

[promise/queue.ts:52](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L52)

## Properties

### finishedPromise

• `Private` **finishedPromise**: `undefined` \| [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

#### Defined in

[promise/queue.ts:45](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L45)

___

### finishedResolver

• `Private` **finishedResolver**: `undefined` \| () => `void`

#### Defined in

[promise/queue.ts:46](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L46)

___

### maxConcurrent

• `Private` **maxConcurrent**: `number`

#### Defined in

[promise/queue.ts:42](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L42)

___

### paused

• `Private` **paused**: `boolean` = `false`

#### Defined in

[promise/queue.ts:43](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L43)

___

### queue

• `Private` **queue**: `QueueElement`[] = `[]`

#### Defined in

[promise/queue.ts:44](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L44)

___

### running

• `Private` **running**: `number` = `0`

#### Defined in

[promise/queue.ts:41](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L41)

## Methods

### add

▸ **add**\<`P`, `T`\>(`asyncFn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`\>

Add async functions or an array of async functions to the queue.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `T` | extends () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asyncFn` | `T` | The async function(s) to add to the queue. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`\>

A promise that resolves when the added function(s) finishes.

#### Defined in

[promise/queue.ts:62](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L62)

▸ **add**\<`P`, `T`\>(`asyncFn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `T` | extends () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `asyncFn` | `T`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`P`[]\>

#### Defined in

[promise/queue.ts:63](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L63)

___

### buildWaitingPromise

▸ **buildWaitingPromise**\<`T`\>(`asyncFn`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `asyncFn` | () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

#### Defined in

[promise/queue.ts:114](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L114)

___

### checkIfDone

▸ **checkIfDone**(): `void`

#### Returns

`void`

#### Defined in

[promise/queue.ts:146](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L146)

___

### clear

▸ **clear**(): `void`

Removes all the tasks from the queue

#### Returns

`void`

#### Defined in

[promise/queue.ts:75](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L75)

___

### done

▸ **done**(): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

Returns a shared promise that resolves when the queue is empty and all tasks have finished executing.

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`boolean`\>

#### Defined in

[promise/queue.ts:103](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L103)

___

### getQueue

▸ **getQueue**(): () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>[]

Return the tasks added to the queue

#### Returns

() => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`any`\>[]

#### Defined in

[promise/queue.ts:93](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L93)

___

### isPaused

▸ **isPaused**(): `boolean`

Returns whether the queue is paused

#### Returns

`boolean`

#### Defined in

[promise/queue.ts:98](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L98)

___

### pause

▸ **pause**(): `void`

Pauses the execution of the queue

#### Returns

`void`

#### Defined in

[promise/queue.ts:82](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L82)

___

### resume

▸ **resume**(): `void`

Resumes the execution of the tasks in the queue

#### Returns

`void`

#### Defined in

[promise/queue.ts:87](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L87)

___

### run

▸ **run**(): `void`

#### Returns

`void`

#### Defined in

[promise/queue.ts:121](https://github.com/mhodge11/underscorets/blob/471b259/src/promise/queue.ts#L121)
