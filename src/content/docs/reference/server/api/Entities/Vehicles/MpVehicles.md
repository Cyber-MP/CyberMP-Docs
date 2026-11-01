---
editUrl: false
next: false
prev: false
title: "MpVehicles"
---

Defined in: vehicles.ts:60

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)\>

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Entity instance or ID

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Entity instance, or `undefined` if the entity does not exist (does not throw)

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

> **create**(`options`): [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Defined in: vehicles.ts:61

#### Parameters

##### options

`CreateVehicleOptions`

Object with the fields:

| Name | Type | Default |
| ------ | ------ | ------ |
| `model` | [`GameHash`](/reference/server/api/hashes/gamehash/) | — |
| `appearance` | [`GameHash`](/reference/server/api/hashes/gamehash/) | — |
| `position` | [`Vector3`](/reference/server/api/global/vector3/) | — |
| `dimension?` | `number` | — |
| `health?` | `number` | `300` |
| `yaw?` | `number` | `0` |

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

***

<a id="destroy"></a>

### destroy()

> **destroy**(`vehicle`): `void`

Defined in: vehicles.ts:62

#### Parameters

##### vehicle

`number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

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

`number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Entity instance or ID

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

> **toArray**(): [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)[]

Defined in: vehicles.ts:63

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)[]
