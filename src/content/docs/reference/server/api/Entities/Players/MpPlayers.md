---
editUrl: false
next: false
prev: false
title: "MpPlayers"
---

Defined in: players.ts:26

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPlayer`](/reference/server/api/entities/players/mpplayer/)\>

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Entity instance or ID

#### Returns

[`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Entity instance, or `undefined` if the entity does not exist (does not throw)

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="exists"></a>

### exists()

> **exists**(`entity`): `boolean`

Defined in: entities.ts:98

Checks if an entity exists.

#### Parameters

##### entity

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Entity instance or ID

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="kick"></a>

### kick()

> **kick**(`player`, `reason?`): `void`

Defined in: players.ts:27

#### Parameters

##### player

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

##### reason?

`string`

Kick reason shown to the player. Pass it explicitly (an empty string is fine): in the current server a call without `reason` fails with `Argument at index 1 was null`.

#### Returns

`void`

***

<a id="toarray"></a>

### toArray()

> **toArray**(): [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)[]

Defined in: players.ts:28

#### Returns

[`MpPlayer`](/reference/server/api/entities/players/mpplayer/)[]
