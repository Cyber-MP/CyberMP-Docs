---
editUrl: false
next: false
prev: false
title: "WorldEvents"
---

Defined in: events.ts:384

Events related to the world.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="doorstatechange"></a>

### doorStateChange()

> **doorStateChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:388

Triggered when a any door's state changes.

#### Parameters

##### playerId

`number`

##### data

[`DoorStateChangeEventData`](/reference/server/api/events/world/doorstatechangeeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="explosion"></a>

### explosion()

> **explosion**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:406

Triggered when an explosion occurs.

#### Parameters

##### playerId

`number`

##### data

[`ExplosionEventData`](/reference/server/api/events/world/explosioneventdata/)

#### Returns

`boolean` \| `void`

***

<a id="fire"></a>

### fire()

> **fire**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:402

Triggered when a fire starts anywhere on map.

#### Parameters

##### playerId

`number`

##### data

[`FireEventData`](/reference/server/api/events/world/fireeventdata/)

#### Returns

`boolean` \| `void`

***

<a id="globalmetachange"></a>

### globalMetaChange()

> **globalMetaChange**(`key`, `newValue`, `oldValue`): `void`

Defined in: events.ts:410

Triggered when global meta changed

#### Parameters

##### key

`string`

##### newValue

`any`

##### oldValue

`any`

#### Returns

`void`

***

<a id="liftstatechange"></a>

### liftStateChange()

> **liftStateChange**(`playerId`, `data`): `boolean` \| `void`

Defined in: events.ts:395

Triggered when a any lift's state changes.

#### Parameters

##### playerId

`number`

##### data

[`LiftStateChangeEventData`](/reference/server/api/events/world/liftstatechangeeventdata/)

#### Returns

`boolean` \| `void`
