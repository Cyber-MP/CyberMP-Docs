---
editUrl: false
next: false
prev: false
title: "MpMeta"
---

Defined in: meta.ts:7

Sets/gets metadata for the any entity.

## Methods

<a id="getentitymeta"></a>

### getEntityMeta()

> **getEntityMeta**\<`T`\>(`entity`, `key`): `T`

Defined in: meta.ts:25

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### entity

`number` \| [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`EntityType`](/reference/server/api/entities/entitytype/)\>

##### key

`string`

#### Returns

`T`

***

<a id="getglobalmeta"></a>

### getGlobalMeta()

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: meta.ts:9

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### key

`string`

#### Returns

`T`

***

<a id="getplayermeta"></a>

### getPlayerMeta()

> **getPlayerMeta**\<`T`\>(`player`, `key`): `T`

Defined in: meta.ts:17

#### Type Parameters

##### T

`T` = `any`

#### Parameters

##### player

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

##### key

`string`

#### Returns

`T`

***

<a id="setentitymeta"></a>

### setEntityMeta()

> **setEntityMeta**(`entity`, `key`, `value`, `sync?`): `void`

Defined in: meta.ts:19

#### Parameters

##### entity

`number` \| [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`EntityType`](/reference/server/api/entities/entitytype/)\>

##### key

`string`

##### value

`any`

##### sync?

`boolean`

Defaults to `true` when omitted: the value is replicated to clients. Pass `false` for server-only data.

#### Returns

`void`

***

<a id="setglobalmeta"></a>

### setGlobalMeta()

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: meta.ts:8

#### Parameters

##### key

`string`

##### value

`any`

##### sync?

`boolean`

Defaults to `true` when omitted: the value is replicated to clients. Pass `false` for server-only data.

#### Returns

`void`

***

<a id="setplayermeta"></a>

### setPlayerMeta()

> **setPlayerMeta**(`player`, `key`, `value`, `sync?`): `void`

Defined in: meta.ts:11

#### Parameters

##### player

`number` \| [`MpPlayer`](/reference/server/api/entities/players/mpplayer/)

##### key

`string`

##### value

`any`

##### sync?

`boolean`

Defaults to `true` when omitted: the value is replicated to clients. Pass `false` for server-only data.

#### Returns

`void`
