---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: events.ts:568

Event system for subscribing, emitting, and handling multiplayer events.

Provides both strongly typed and generic event APIs.

## Methods

<a id="emit"></a>

### emit()

> **emit**(`eventName`, ...`args`): `void`

Defined in: events.ts:614

Emit a custom event to the server-side handlers of all server resources. It is not sent to clients — use `emitClient` for that.

#### Parameters

##### eventName

`string`

##### args

...`any`[]

#### Returns

`void`

***

<a id="emitclient"></a>

### emitClient()

> **emitClient**(`player`, `eventName`, ...`args`): `void`

Defined in: events.ts:621

Emit a client-side event from the server.

#### Parameters

##### player

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Target player or player ID

##### eventName

`string`

##### args

...`any`[]

#### Returns

`void`

***

<a id="off"></a>

### off()

#### Call Signature

> **off**\<`E`\>(`eventName`, `callback`): `void`

Defined in: events.ts:599

Unregister an event listener.

Works for standard events. Handlers registered with [MpEvents.onClient](/reference/server/api/events/mpevents/#onclient) are currently not removed: `off()` looks them up under the plain event name, while `onClient` registers them under an internal prefixed name.

##### Type Parameters

###### E

`E` *extends* keyof [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

Event key from MpEventsMap

##### Parameters

###### eventName

`E`

###### callback

[`MpEventsMap`](/reference/server/api/events/mpeventsmap/)\[`E`\]

##### Returns

`void`

#### Call Signature

> **off**(`eventName`, `callback`): `void`

Defined in: events.ts:609

Unregister an event listener.

Works for standard events. Handlers registered with [MpEvents.onClient](/reference/server/api/events/mpevents/#onclient) are currently not removed: `off()` looks them up under the plain event name, while `onClient` registers them under an internal prefixed name.

##### Parameters

###### eventName

`string`

###### callback

(...`args`) => `void`

##### Returns

`void`

***

<a id="on"></a>

### on()

#### Call Signature

> **on**\<`E`\>(`eventName`, `callback`): `void`

Defined in: events.ts:574

Listen for a platform or custom event.

##### Type Parameters

###### E

`E` *extends* keyof [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

Event key from MpEventsMap

##### Parameters

###### eventName

`E`

###### callback

[`MpEventsMap`](/reference/server/api/events/mpeventsmap/)\[`E`\]

##### Returns

`void`

#### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: events.ts:579

Listen for a generic event.

##### Parameters

###### eventName

`string`

###### callback

(...`args`) => `void`

##### Returns

`void`

***

<a id="onclient"></a>

### onClient()

> **onClient**(`eventName`, `callback`): `void`

Defined in: events.ts:587

Listen for a client-side event on the server.

#### Parameters

##### eventName

`string`

Event name

##### callback

(`player`, ...`args`) => `void`

Function triggered with player context

#### Returns

`void`
