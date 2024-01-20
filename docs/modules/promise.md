[underscorets](../README.md) / [Exports](../modules.md) / promise

# Namespace: promise

## Table of contents

### Type Aliases

- [Queue](promise.md#queue)

### Variables

- [Queue](promise.md#queue-1)

### Functions

- [races](promise.md#races)
- [retry](promise.md#retry)
- [sleep](promise.md#sleep)
- [timeout](promise.md#timeout)
- [tryCatch](promise.md#trycatch)

## Other

### Queue

Ƭ **Queue**: [`Queue`](../classes/Queue.md)

#### Defined in

promise/index.ts:9

promise/index.ts:11

___

### Queue

• **Queue**: typeof [`Queue`](../classes/Queue.md)

#### Defined in

promise/index.ts:9

promise/index.ts:11

## Promise

### races

▸ **races**\<`T`\>(`waitFor`, `...promises`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`[]\>

Similar to [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race?retiredLocale=de)
but allows to specify how many promises to wait for.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the result of the promises. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `waitFor` | `number` | The number of promises to wait for. |
| `...promises` | [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>[] | The promises to wait for. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`[]\>

A promise that resolves an array of the results of the first n promises.

**`Example`**

```ts
const prom1 = Promise.resolve(1);
const prom2 = new Promise(resolve => setTimeout(resolve, 100, 2));
const prom3 = Promise.resolve(3);

const firstTwo = await races(2, prom1, prom2, prom3);
// => [1, 3]
```

#### Defined in

promise/index.ts:13

___

### retry

▸ **retry**\<`T`\>(`func`, `options?`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

Retry a function until it succeeds or the maximum number of retries is reached.

Default maxRetries: `5`.
Default backoff: `2^retries * 100ms` (100, 200, 400, 800, 1600, 3200, ...)

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the result of the function |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `func` | () => [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\> | The function to retry |
| `options?` | `Object` | The options for the retry |
| `options.backoff?` | (`retries`: `number`) => `number` | The backoff function to use. Defaults to `2^retries * 100` |
| `options.maxRetries?` | `number` | The maximum number of retries. Defaults to `5` |
| `options.onRetry?` | (`error?`: `unknown`, `attempted?`: `number`) => `void` | The function to call when a retry is attempted. It will be called with the error and the attempt number |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

A promise that resolves when the function succeeds

**`Example`**

```ts
await retry(() => fetch('https://example.com'));

// ---- Advanced example ----
const fetchSite = async () => {
  const response = await fetch('https://example.com');
  if(!response.ok)
    throw new Error('Failed to fetch');
}

const logger = (error: unknown, retry?: number) => console.log("Retrying", retry, error);

await retry(fetchSite, { maxRetries: 3, backoff: retries => retries * 1000, onRetry: logger });
// => Will retry 3 times with a 1 second delay between each retry.
// => Will log the error and retry number.
```

**`Throws`**

The error of the last attempt if all attempts fail

#### Defined in

promise/index.ts:14

___

### sleep

▸ **sleep**(`ms`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

Sleeps for the given amount of time.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | Amount of time to sleep in milliseconds. |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

A promise that resolves after the given amount of time.

**`Example`**

```ts
await sleep(1000);
// => Waits for 1 second.
```

#### Defined in

promise/index.ts:15

___

### timeout

▸ **timeout**\<`T`\>(`promise`, `timeout`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

Returns a new promise that will reject with an error after a specified timeout.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the resolved value |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\> | The promise to wrap |
| `timeout` | `number` | The timeout in milliseconds |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\>

A new promise that will reject with an error after the specified timeout

**`Example`**

```ts
try {
  await timeout(fetch('https://example.com'), 1000);
} catch (error) {
  console.log(error.message);
  // => 'Promise timed out after 1000ms'
}
```

**`Throws`**

The error of the promise if it rejects before the timeout

**`Throws`**

An error if the promise does not resolve or reject before timing out

#### Defined in

promise/index.ts:16

___

### tryCatch

▸ **tryCatch**\<`T`\>(`promise`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`T`, `undefined`] \| [`undefined`, [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )]\>

Attempts to execute a promise and returns an array with the result or error.

This is useful for handling errors in async functions without try/catch blocks.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | The type of the result |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `promise` | [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`T`\> | A Promise to be executed |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`T`, `undefined`] \| [`undefined`, [`Error`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error )]\>

A Promise that resolves to an array containing the result or error.
If the Promise executes successfully, the array contains the result and a null error.
If the Promise throws an error, the array contains undefined for the result and the error object.

**`Example`**

```ts
const [data, error] = await tryCatch(fetch('https://example.com/api'));
if (error)
  console.error(`Error: ${error.message}`);
```

**`Throws`**

The error of the promise if it rejects and the error is not an instance of Error

#### Defined in

promise/index.ts:17
