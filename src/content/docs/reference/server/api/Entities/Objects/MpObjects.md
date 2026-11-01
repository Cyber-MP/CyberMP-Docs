---
editUrl: false
next: false
prev: false
title: "MpObjects"
---

Defined in: objects.ts:27

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpObject`](/reference/server/api/entities/objects/mpobject/)\>

## Methods

<a id="at"></a>

### at()

> **at**(`entity`): [`MpObject`](/reference/server/api/entities/objects/mpobject/)

Defined in: entities.ts:108

Retrieves an entity by instance or ID.

#### Parameters

##### entity

`number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/)

Entity instance or ID

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)

Entity instance, or `undefined` if the entity does not exist (does not throw)

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

> **create**(`options`): [`MpObject`](/reference/server/api/entities/objects/mpobject/)

Defined in: objects.ts:28

#### Parameters

##### options

[`CreateObjectOptions`](/reference/server/api/entities/objects/createobjectoptions/)

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)

***

<a id="destroy"></a>

### destroy()

> **destroy**(`entity`): `void`

Defined in: objects.ts:29

#### Parameters

##### entity

`number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/)

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

`number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/)

Entity instance or ID

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

> **toArray**(): [`MpObject`](/reference/server/api/entities/objects/mpobject/)[]

Defined in: objects.ts:30

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)[]
