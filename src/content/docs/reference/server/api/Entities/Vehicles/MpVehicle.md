---
editUrl: false
next: false
prev: false
title: "MpVehicle"
---

Defined in: vehicles.ts:18

## Extends

- [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`Vehicle`](/reference/server/api/entities/entitytype/#vehicle)\>

## Properties

<a id="angularvelocity"></a>

### angularVelocity

> `readonly` **angularVelocity**: [`Vector3`](/reference/server/api/global/vector3/)

Defined in: vehicles.ts:23

***

<a id="appearance"></a>

### appearance

> `readonly` **appearance**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: vehicles.ts:20

***

<a id="dimension"></a>

### dimension

> **dimension**: `number`

Defined in: entities.ts:58

Virtual world dimension this entity belongs to

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`dimension`](/reference/server/api/entities/mpentity/#dimension)

***

<a id="exist"></a>

### exist

> `readonly` **exist**: `boolean`

Defined in: entities.ts:55

Whether the entity still exists in the world

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`exist`](/reference/server/api/entities/mpentity/#exist)

***

<a id="health"></a>

### health

> `readonly` **health**: `number`

Defined in: vehicles.ts:21

***

<a id="id"></a>

### id

> `readonly` **id**: `number`

Defined in: entities.ts:38

Unique entity identifier

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`id`](/reference/server/api/entities/mpentity/#id)

***

<a id="lastseats"></a>

### lastSeats

> **lastSeats**: `object`

Defined in: vehicles.ts:32

#### driver

> `readonly` **driver**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### passenger

> `readonly` **passenger**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### rearLeft

> `readonly` **rearLeft**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### rearRight

> `readonly` **rearRight**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

***

<a id="model"></a>

### model

> `readonly` **model**: [`GameHash`](/reference/server/api/hashes/gamehash/)

Defined in: vehicles.ts:19

***

<a id="owner"></a>

### owner

> **owner**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

Defined in: entities.ts:41

Current owner of the entity sync

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`owner`](/reference/server/api/entities/mpentity/#owner)

***

<a id="position"></a>

### position

> `readonly` **position**: [`Vector3`](/reference/server/api/global/vector3/)

Defined in: entities.ts:43

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`position`](/reference/server/api/entities/mpentity/#position)

***

<a id="rotation"></a>

### rotation

> `readonly` **rotation**: [`Rotation`](/reference/server/api/global/rotation/)

Defined in: entities.ts:44

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`rotation`](/reference/server/api/entities/mpentity/#rotation)

***

<a id="seats"></a>

### seats

> **seats**: `object`

Defined in: vehicles.ts:25

#### driver

> `readonly` **driver**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### passenger

> `readonly` **passenger**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### rearLeft

> `readonly` **rearLeft**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

#### rearRight

> `readonly` **rearRight**: [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

***

<a id="streamingradius"></a>

### streamingRadius

> **streamingRadius**: `number`

Defined in: entities.ts:61

Distance at which this entity streams in/out

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`streamingRadius`](/reference/server/api/entities/mpentity/#streamingradius)

***

<a id="type"></a>

### type

> `readonly` **type**: [`Vehicle`](/reference/server/api/entities/entitytype/#vehicle)

Defined in: entities.ts:52

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`type`](/reference/server/api/entities/mpentity/#type)

***

<a id="velocity"></a>

### velocity

> `readonly` **velocity**: [`Vector3`](/reference/server/api/global/vector3/)

Defined in: vehicles.ts:22

***

<a id="yaw"></a>

### yaw

> `readonly` **yaw**: `number`

Defined in: entities.ts:47

Yaw angle in degrees

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`yaw`](/reference/server/api/entities/mpentity/#yaw)

## Methods

<a id="destroy"></a>

### destroy()

> **destroy**(): `void`

Defined in: vehicles.ts:42

#### Returns

`void`

***

<a id="getlastplayerinseat"></a>

### getLastPlayerInSeat()

> **getLastPlayerInSeat**(`seat`): [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

Defined in: vehicles.ts:40

#### Parameters

##### seat

[`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/)

#### Returns

[`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

***

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

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`getMeta`](/reference/server/api/entities/mpentity/#getmeta)

***

<a id="getplayerinseat"></a>

### getPlayerInSeat()

> **getPlayerInSeat**(`seat`): [`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

Defined in: vehicles.ts:39

#### Parameters

##### seat

[`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/)

#### Returns

[`MpPlayer`](/reference/server/api/entities/players/mpplayer/) \| `null`

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

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`setMeta`](/reference/server/api/entities/mpentity/#setmeta)
