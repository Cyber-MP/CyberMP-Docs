---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: events.d.ts:145

Primary multi-target Event Emitter interface for managing client, server, and CEF bridge communications.
Handles binding event listeners, deregistering handlers, and dispatching payloads across contexts.

## Methods

<a id="emit"></a>

### emit()

> **emit**(`eventName`, ...`args`): `void`

Defined in: events.d.ts:151

Dispatches a local event across the client resource scope.

#### Parameters

##### eventName

`string`

The target event channel identifier.

##### args

...`any`[]

Arbitrary payload arguments passed to active handlers.

#### Returns

`void`

***

<a id="emitcef"></a>

### emitCef()

> **emitCef**(`eventName`, ...`args`): `void`

Defined in: events.d.ts:165

Forwards a tracking event bridge payload straight into the local active Chromium UI browser layouts.

#### Parameters

##### eventName

`string`

The targeted callback hook registered inside your CEF web apps.

##### args

...`any`[]

Variables passed into web execution loops.

#### Returns

`void`

***

<a id="emitserver"></a>

### emitServer()

> **emitServer**(`eventName`, ...`args`): `void`

Defined in: events.d.ts:158

Encapsulates and forwards an event payload across the network socket layer directly to the server host.

#### Parameters

##### eventName

`string`

Target string channel matching server-side listeners.

##### args

...`any`[]

Data variables to serialize and stream over the network.

#### Returns

`void`

***

<a id="off"></a>

### off()

#### Call Signature

> **off**\<`E`\>(`eventName`, `callback`): `void`

Defined in: events.d.ts:213

Detaches and de-allocates an active type-safe engine hook handler reference.

##### Type Parameters

###### E

`E` *extends* keyof [`MpEventsMap`](/reference/client/api/events/mpeventsmap/)

Bounded validation keys linking to engine maps.

##### Parameters

###### eventName

`E`

Target client engine tracking channel name key.

###### callback

[`MpEventsMap`](/reference/client/api/events/mpeventsmap/)\[`E`\]

The original functional reference signature block to tear down.

##### Returns

`void`

#### Call Signature

> **off**(`eventName`, `callback`): `void`

Defined in: events.d.ts:223

Detaches a general or custom application event string tracking handler layout logic block.

##### Parameters

###### eventName

`string`

The target event namespace string key.

###### callback

(...`args`) => `void`

Functional reference signature block to unbind.

##### Returns

`void`

***

<a id="on"></a>

### on()

#### Call Signature

> **on**\<`E`\>(`eventName`, `callback`): `void`

Defined in: events.d.ts:198

Subscribes a type-safe listener function to catch core multiplayer platform tracking engine hooks.

##### Type Parameters

###### E

`E` *extends* keyof [`MpEventsMap`](/reference/client/api/events/mpeventsmap/)

Strictly bounded keys originating inside `MpEventsMap`.

##### Parameters

###### eventName

`E`

The active client engine event name key.

###### callback

[`MpEventsMap`](/reference/client/api/events/mpeventsmap/)\[`E`\]

Handler function whose structural signatures match engine data constraints exactly.

##### Returns

`void`

#### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: events.d.ts:205

Subscribes a custom script execution callback tracking local text channels or decoupled system events.

##### Parameters

###### eventName

`string`

The designated custom application event namespace key.

###### callback

(...`args`) => `void`

Handler logic executed immediately upon local triggers.

##### Returns

`void`

***

<a id="oncef"></a>

### onCef()

#### Call Signature

> **onCef**\<`E`\>(`eventName`, `callback`): `void`

Defined in: events.d.ts:180

Registers a strict event listener tracking core CEF lifecycle mutations.

##### Type Parameters

###### E

`E` *extends* keyof [`MpCefEventsMap`](/reference/client/api/events/mpcefeventsmap/)

Strictly bounded keys originating inside `MpCefEventsMap`.

##### Parameters

###### eventName

`E`

The specific target CEF lifecycle event type.

###### callback

[`MpCefEventsMap`](/reference/client/api/events/mpcefeventsmap/)\[`E`\]

Type-safe handler function mapping parameters cleanly.

##### Returns

`void`

#### Call Signature

> **onCef**(`eventName`, `callback`): `void`

Defined in: events.d.ts:190

Registers a custom user-defined UI bridge event listener tracking incoming notifications dispatched from your web application scripts.

##### Parameters

###### eventName

`string`

Target string channel key matching web executions.

###### callback

(...`args`) => `void`

Arbitrary execution callback running on invocation.

##### Returns

`void`

***

<a id="onserver"></a>

### onServer()

> **onServer**(`eventName`, `callback`): `void`

Defined in: events.d.ts:172

Subscribes a listener function to network event streams dispatched directly from the server.

#### Parameters

##### eventName

`string`

Targeted network channel string key.

##### callback

(...`args`) => `void`

Execution callback running upon packet resolution.

#### Returns

`void`
