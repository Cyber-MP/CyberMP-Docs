---
editUrl: false
next: false
prev: false
title: "MpPlayer"
---

Defined in: players.ts:8

## Extends

- [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`Player`](/reference/server/api/entities/entitytype/#player)\>

## Properties

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

Defined in: players.ts:10

***

<a id="id"></a>

### id

> `readonly` **id**: `number`

Defined in: entities.ts:38

Unique entity identifier

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`id`](/reference/server/api/entities/mpentity/#id)

***

<a id="ip"></a>

### ip

> `readonly` **ip**: `string`

Defined in: players.ts:15

***

<a id="lastvehicle"></a>

### lastVehicle

> `readonly` **lastVehicle**: [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/) \| `null`

Defined in: players.ts:14

***

<a id="nickname"></a>

### nickname

> `readonly` **nickname**: `string`

Defined in: players.ts:11

***

<a id="owner"></a>

### owner

> **owner**: `MpPlayer`

Defined in: entities.ts:41

Current owner of the entity sync

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`owner`](/reference/server/api/entities/mpentity/#owner)

***

<a id="ping"></a>

### ping

> `readonly` **ping**: `number`

Defined in: players.ts:12

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

> `readonly` **type**: [`Player`](/reference/server/api/entities/entitytype/#player)

Defined in: entities.ts:52

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`type`](/reference/server/api/entities/mpentity/#type)

***

<a id="vehicle"></a>

### vehicle

> `readonly` **vehicle**: [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/) \| `null`

Defined in: players.ts:13

***

<a id="velocity"></a>

### velocity

> `readonly` **velocity**: [`Vector3`](/reference/server/api/global/vector3/)

Defined in: players.ts:9

***

<a id="yaw"></a>

### yaw

> `readonly` **yaw**: `number`

Defined in: entities.ts:47

Yaw angle in degrees

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`yaw`](/reference/server/api/entities/mpentity/#yaw)

## Methods

<a id="emit"></a>

### emit()

> **emit**(`eventName`, ...`args`): `void`

Defined in: players.ts:19

#### Parameters

##### eventName

`string`

##### args

...`any`[]

#### Returns

`void`

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

<a id="kick"></a>

### kick()

> **kick**(`reason?`): `void`

Defined in: players.ts:17

#### Parameters

##### reason?

`string`

Kick reason shown to the player. Pass it explicitly (an empty string is fine): in the current server a call without `reason` fails with `Argument at index 1 was null`.

#### Returns

`void`

***

<a id="mute"></a>

### mute()

> **mute**(): `void`

Defined in: players.ts:20

#### Returns

`void`

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
