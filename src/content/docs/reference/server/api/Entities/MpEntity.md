---
editUrl: false
next: false
prev: false
title: "MpEntity"
---

Defined in: entities.ts:36

Base interface representing any in-game entity.

## Extended by

- [`MpObject`](/reference/server/api/entities/objects/mpobject/)
- [`MpPed`](/reference/server/api/entities/peds/mpped/)
- [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)
- [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)
- [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

## Type Parameters

### TEntityType

`TEntityType` *extends* [`EntityType`](/reference/server/api/entities/entitytype/) = [`EntityType`](/reference/server/api/entities/entitytype/)

## Properties

<a id="dimension"></a>

### dimension

> **dimension**: `number`

Defined in: entities.ts:58

Virtual world dimension this entity belongs to

***

<a id="exist"></a>

### exist

> `readonly` **exist**: `boolean`

Defined in: entities.ts:55

Whether the entity still exists in the world

***

<a id="id"></a>

### id

> `readonly` **id**: `number`

Defined in: entities.ts:38

Unique entity identifier

***

<a id="owner"></a>

### owner

> **owner**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Defined in: entities.ts:41

Current owner of the entity sync

***

<a id="position"></a>

### position

> `readonly` **position**: [`Vector3`](/reference/server/api/global/vector3/)

Defined in: entities.ts:43

***

<a id="rotation"></a>

### rotation

> `readonly` **rotation**: [`Rotation`](/reference/server/api/global/rotation/)

Defined in: entities.ts:44

***

<a id="streamingradius"></a>

### streamingRadius

> **streamingRadius**: `number`

Defined in: entities.ts:61

Distance at which this entity streams in/out

***

<a id="type"></a>

### type

> `readonly` **type**: `TEntityType`

Defined in: entities.ts:52

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

***

<a id="yaw"></a>

### yaw

> `readonly` **yaw**: `number`

Defined in: entities.ts:47

Yaw angle in degrees

## Methods

<a id="getmeta"></a>

### getMeta()

> **getMeta**\<`T`\>(`key`): `T`

Defined in: entities.ts:73

Retrieves metadata stored on this entity.

#### Type Parameters

##### T

`T` = `any`

Expected return type

#### Parameters

##### key

`string`

Metadata key

#### Returns

`T`

Stored value, or `null` if not set

#### Example

```ts
const health = entity.getMeta<number>("health");
```

***

<a id="setmeta"></a>

### setMeta()

> **setMeta**(`key`, `value`, `sync?`): `void`

Defined in: entities.ts:82

Sets metadata on this entity.

#### Parameters

##### key

`string`

Metadata key

##### value

`any`

Value to store

##### sync?

`boolean`

Whether the value is replicated to clients. Defaults to `true`

#### Returns

`void`
