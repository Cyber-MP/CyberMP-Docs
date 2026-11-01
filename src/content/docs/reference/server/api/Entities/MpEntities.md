---
editUrl: false
next: false
prev: false
title: "MpEntities"
---

Defined in: entities.ts:91

Collection wrapper for managing multiple entities.

## Extended by

- [`MpObjects`](/reference/server/api/entities/objects/mpobjects/)
- [`MpPeds`](/reference/server/api/entities/peds/mppeds/)
- [`MpPickups`](/reference/server/api/entities/pickups/mppickups/)
- [`MpPlayers`](/reference/server/api/entities/players/mpplayers/)
- [`MpVehicles`](/reference/server/api/entities/vehicles/mpvehicles/)

## Type Parameters

### T

`T` *extends* [`MpEntity`](/reference/server/api/entities/mpentity/) = [`MpEntity`](/reference/server/api/entities/mpentity/)

Specific entity type extending MpEntity

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): `T` \| `undefined`

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| `T`

Entity instance or ID

#### Returns

`T`

Entity instance, or `undefined` if the entity does not exist (does not throw)

***

<a id="exists"></a>

### exists()

> **exists**(`entity`): `boolean`

Defined in: entities.ts:98

Checks if an entity exists.

#### Parameters

##### entity

`number` \| `T`

Entity instance or ID

#### Returns

`boolean`

True if entity exists
