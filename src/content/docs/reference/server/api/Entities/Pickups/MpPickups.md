---
editUrl: false
next: false
prev: false
title: "MpPickups"
---

Defined in: pickups.ts:37

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)\>

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Entity instance or ID

#### Returns

[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Entity instance, or `undefined` if the entity does not exist (does not throw)

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

> **create**(`options`): [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Defined in: pickups.ts:38

#### Parameters

##### options

[`CreatePickupOptions`](/reference/server/api/entities/pickups/createpickupoptions/)

#### Returns

[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

***

<a id="exists"></a>

### exists()

> **exists**(`entity`): `boolean`

Defined in: entities.ts:98

Checks if an entity exists.

#### Parameters

##### entity

`number` \| [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Entity instance or ID

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)
