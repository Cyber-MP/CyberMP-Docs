---
editUrl: false
next: false
prev: false
title: "MpPeds"
---

Defined in: peds.ts:30

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPed`](/reference/server/api/entities/peds/mpped/)\>

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): [`MpPed`](/reference/server/api/entities/peds/mpped/)

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/)

Entity instance or ID

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)

Entity instance, or `undefined` if the entity does not exist (does not throw)

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

> **create**(`options`): [`MpPed`](/reference/server/api/entities/peds/mpped/)

Defined in: peds.ts:31

#### Parameters

##### options

[`CreatePedOptions`](/reference/server/api/entities/peds/createpedoptions/)

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)

***

<a id="destroy"></a>

### destroy()

> **destroy**(`ped`): `void`

Defined in: peds.ts:32

#### Parameters

##### ped

`number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/)

#### Returns

`void`

***

<a id="exists"></a>

### exists()

> **exists**(`entity`): `boolean`

Defined in: entities.ts:98

Checks if an entity exists.

#### Parameters

##### entity

`number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/)

Entity instance or ID

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

> **toArray**(): [`MpPed`](/reference/server/api/entities/peds/mpped/)[]

Defined in: peds.ts:33

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)[]
