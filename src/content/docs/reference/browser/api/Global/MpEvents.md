---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: index.d.ts:1

## Methods

<a id="emit"></a>

### emit()

> **emit**(`eventName`, ...`args`): `void`

Defined in: index.d.ts:21

Triggers an event on client-side (received there with `mp.events.onCef`).
Arguments are sent as JSON: they must be JSON-serializable, and a single array argument arrives on the client spread into separate arguments.

#### Parameters

##### eventName

`string`

Name of the event to trigger.

##### args

...`any`[]

Arguments to send with the event.

#### Returns

`void`

***

<a id="off"></a>

### off()

> **off**(`eventName`, `func`): `void`

Defined in: index.d.ts:14

Removes a previously registered event listener.

#### Parameters

##### eventName

`string`

Name of the event.

##### func

(...`args`) => `void`

Callback function to remove.

#### Returns

`void`

***

<a id="on"></a>

### on()

> **on**(`eventName`, `callback`): `void`

Defined in: index.d.ts:7

Used for listening for events coming from client-side.

#### Parameters

##### eventName

`string`

Name of the event to listen for.

##### callback

(...`args`) => `void`

Function to execute when the event is triggered.

#### Returns

`void`
