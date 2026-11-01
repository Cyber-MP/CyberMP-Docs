---
editUrl: false
next: false
prev: false
title: "MpMeta"
---

Defined in: meta.d.ts:5

Interface managing cross-resource and synchronized state metadata across the network layer.
Allows attaching arbitrary data structures to globals, specific players, the local player, or synchronized network entities.

## Methods

<a id="getentitymeta"></a>

### getEntityMeta()

> **getEntityMeta**\<`T`\>(`netId`, `key`): `T`

Defined in: meta.d.ts:77

Retrieves a metadata value associated with a synchronized network entity.

#### Type Parameters

##### T

`T` = `any`

The expected type of the returned metadata value.

#### Parameters

##### netId

`number`

The network-assigned unique identifier tracking the target entity.

##### key

`string`

The unique identifier string of the entity's metadata entry.

#### Returns

`T`

The stored metadata value cast to type T, or `null` if it does not exist.

***

<a id="getglobalmeta"></a>

### getGlobalMeta()

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: meta.d.ts:20

Retrieves a global metadata value by its key.

#### Type Parameters

##### T

`T` = `any`

The expected type of the returned metadata value.

#### Parameters

##### key

`string`

The unique identifier string of the metadata entry to look up.

#### Returns

`T`

The stored global metadata value cast to type T, or `null` if it does not exist.

***

<a id="getlocalplayermeta"></a>

### getLocalPlayerMeta()

> **getLocalPlayerMeta**\<`T`\>(`key`): `T`

Defined in: meta.d.ts:59

Retrieves a metadata value attached specifically to the local player instance.

#### Type Parameters

##### T

`T` = `any`

The expected type of the returned metadata value.

#### Parameters

##### key

`string`

The unique identifier string of the local player's metadata entry.

#### Returns

`T`

The stored metadata value cast to type T, or `null` if it does not exist.

***

<a id="getplayermeta"></a>

### getPlayerMeta()

> **getPlayerMeta**\<`T`\>(`playerId`, `key`): `T`

Defined in: meta.d.ts:43

Retrieves a metadata value attached to a specific remote player.

#### Type Parameters

##### T

`T` = `any`

The expected type of the returned metadata value.

#### Parameters

##### playerId

`number`

The network identification integer of the target player.

##### key

`string`

The unique identifier string of the player's metadata entry.

#### Returns

`T`

The stored metadata value cast to type T, or `null` if it does not exist.

***

<a id="setentitymeta"></a>

### setEntityMeta()

> **setEntityMeta**(`netId`, `key`, `value`, `sync?`): `void`

Defined in: meta.d.ts:68

Attaches a metadata state payload to any synchronized network entity (e.g., vehicles, props, peds) using its network ID.

#### Parameters

##### netId

`number`

The network-assigned unique identifier tracking the target entity.

##### key

`string`

The unique identifier string for the entity's metadata entry.

##### value

`any`

The data payload to attach to the entity.

##### sync?

`boolean`

Optional flag. If `true`, synchronizes this entity metadata property to all clients tracking this object.

#### Returns

`void`

***

<a id="setglobalmeta"></a>

### setGlobalMeta()

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: meta.d.ts:12

Sets a global metadata value accessible across the entire runtime environment.

:::caution
The client runtime defines this method as `mp.meta.setGlobal(key, value, sync?)`. `mp.meta.setGlobalMeta` is not defined on the client, so calling it throws a `TypeError`.
:::

#### Parameters

##### key

`string`

The unique identifier string for the metadata entry.

##### value

`any`

The data payload to store (can be any serializable object or primitive).

##### sync?

`boolean`

Optional flag. If `true`, synchronizes this metadata across the network to all other clients.

#### Returns

`void`

***

<a id="setlocalplayermeta"></a>

### setLocalPlayerMeta()

> **setLocalPlayerMeta**(`key`, `value`, `sync?`): `void`

Defined in: meta.d.ts:51

Sets a metadata value restricted or assigned specifically to the local player instance.

#### Parameters

##### key

`string`

The unique identifier string for the local player's metadata entry.

##### value

`any`

The data payload to store.

##### sync?

`boolean`

Optional flag. If `true`, relays this local metadata state out to the server and other clients.

#### Returns

`void`

***

<a id="setplayermeta"></a>

### setPlayerMeta()

> **setPlayerMeta**(`playerId`, `key`, `value`, `sync?`): `void`

Defined in: meta.d.ts:29

Assigns a metadata value to a specific remote player using their unique player network ID.

#### Parameters

##### playerId

`number`

The network identification integer of the target player.

##### key

`string`

The unique identifier string for this player's metadata entry.

##### value

`any`

The data payload to attach to the player.

##### sync?

`boolean`

Optional flag. If `true`, syncs this change to all other connected clients over the network.

#### Returns

`void`
